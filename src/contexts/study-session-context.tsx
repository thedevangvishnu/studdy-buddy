import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useMutation } from "react-query";
import * as requests from "../lib/requests";

interface TimeProps {
  hr: number;
  min: number;
  sec: number;
}

interface StudySessionContextProps {
  isSessionActive: boolean;
  startTime: Date | null;
  currentTime: TimeProps;
  endTime: Date | null;
  breakDuration: number;
  isSessionPaused: boolean;
  isSessionFinished: boolean;
  startSession: () => void;
  pauseUnpause: () => void;
  finishSession: () => void;
  discardSession: () => void;
  endSession: (breakDuration: number) => void;
}

type StudySessionStateProps = Pick<
  StudySessionContextProps,
  | "isSessionActive"
  | "isSessionPaused"
  | "isSessionFinished"
  | "startTime"
  | "endTime"
  | "breakDuration"
>;

const StudySessionContext = createContext<StudySessionContextProps>({
  isSessionActive: false,
  startTime: null,
  endTime: null,
  currentTime: { hr: 0, min: 0, sec: 0 },
  breakDuration: 0,
  isSessionPaused: false,
  isSessionFinished: false,
  startSession: () => {},
  pauseUnpause: () => {},
  finishSession: () => {},
  discardSession: () => {},
  endSession: () => {},
});

export const StudySessionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [studySession, setStudySession] = useState<StudySessionStateProps>({
    isSessionActive: false,
    startTime: null,
    endTime: null,
    breakDuration: 0,
    isSessionPaused: false,
    isSessionFinished: false,
  });

  const startSession = () => {
    const startTime = new Date();

    setStudySession((session) => {
      return { ...session, isSessionActive: true, startTime: startTime };
    });
  };

  const pauseUnpause = () => {
    setStudySession((session) => ({
      ...session,
      isSessionPaused: !session.isSessionPaused,
    }));
  };

  // this function is for the frontend to stop the running clock and open a dialog for user to whether they want save or discard the session
  const finishSession = () => {
    setStudySession((session) => ({
      ...session,
      isSessionFinished: !session.isSessionFinished,
    }));
  };

  const discardSession = () => {
    const reset = {
      isSessionActive: false,
      startTime: null,
      endTime: null,
      breakDuration: 0,
      isSessionPaused: false,
      isSessionFinished: false,
    };

    setStudySession(reset);
  };

  // this function is for taking the finished session and taking in all necessary info like startTine, breakDuration, endTime and make the fetch request to crate a new study session

  const { mutate, isLoading } = useMutation(requests.saveSession, {
    onSuccess: (data) => {
      setStudySession({
        isSessionActive: false,
        startTime: null,
        endTime: null,
        breakDuration: 0,
        isSessionPaused: false,
        isSessionFinished: false,
      });
      console.log(data);
    },
    onError: (err: Error) => {
      console.log(err.message);
    },
  });

  const endSession = async (breakDuration: number) => {
    // note the endTime and breakTime
    const endTime = new Date();

    console.log(breakDuration);

    // todo: check for invalid breakDuration, what if breakDuration > endTime - startTime

    // make the fetch request to backend and pass all the information from the studySession state adn then reset the state for a new study session.
    const session = {
      startTime: studySession.startTime!,
      endTime,
      breakDuration,
    };

    // create a hook for to make this call or use react-query useMutation
    mutate(session);
  };

  //////////////////////////////

  // Centralized logic for clock

  // It is necessary to store this logic inside context and not localize this to a descendant component.

  // If we just pass this currentTime value to a state variable of descendant component (say Clock), then the Clock's "time" will update every second. And in between, if we try to update the "currentTime" to match the "time", React will throw an error becuase child component cannot update the state of parent component during the render phase. It can only be done after the render phase is over and the child is done re-rendering.

  const [currentTime, setCurrentTime] = useState({ hr: 0, min: 0, sec: 0 });
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { isSessionActive, isSessionPaused, isSessionFinished } = studySession;

  useEffect(() => {
    if (isSessionActive && !isSessionPaused && !isSessionFinished) {
      startClock();
    } else if (isSessionPaused || isSessionFinished) {
      stopClock();
    } else {
      resetClock();
    }

    return () => {
      stopClock();
    };
  }, [isSessionActive, isSessionPaused, isSessionFinished]);

  const startClock = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setCurrentTime((prevTime) => {
        const nextTime = { ...prevTime };
        nextTime.sec += 1;
        if (nextTime.sec === 60) {
          nextTime.sec = 0;
          nextTime.min += 1;
          if (nextTime.min === 60) {
            nextTime.min = 0;
            nextTime.hr += 1;
          }
        }

        return nextTime;
      });
    }, 1000);
  };

  const stopClock = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetClock = () => {
    setCurrentTime({ hr: 0, min: 0, sec: 0 });
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  //////////////////////////////

  return (
    <StudySessionContext.Provider
      value={{
        isSessionActive: studySession.isSessionActive,
        currentTime,
        startTime: studySession.startTime,
        endTime: studySession.endTime,
        breakDuration: studySession.breakDuration,
        isSessionPaused: studySession.isSessionPaused,
        isSessionFinished: studySession.isSessionFinished,
        startSession,
        pauseUnpause,
        finishSession,
        discardSession,
        endSession,
      }}
    >
      {children}
    </StudySessionContext.Provider>
  );
};

export const useStudySessionContext = () => {
  const context = useContext(StudySessionContext);
  return context as StudySessionContextProps;
};
