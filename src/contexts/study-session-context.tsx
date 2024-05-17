import { createContext, useContext, useState } from "react";

interface StudySessionContextProps {
  isSessionActive: boolean;
  startTime: Date | null;
  endTime: Date | null;
  breakDuration: number;
  isSessionPaused: boolean;
  isSessionFinished: boolean;
  startSession: () => void;
  pauseUnpause: () => void;
  finishSession: () => void;
  discardSession: () => void;
  endSession: (breakDuration?: number) => void;
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
  const endSession = (breakDuration: number) => {
    // note the endTime and breakTime
    const endTime = new Date();

    setStudySession((session) => ({
      ...session,
      endTime,
      breakTime: breakDuration,
    }));
  };

  return (
    <StudySessionContext.Provider
      value={{
        isSessionActive: studySession.isSessionActive,
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
