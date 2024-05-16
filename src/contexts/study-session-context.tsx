import { createContext, useContext, useState } from "react";

interface StudySessionContextProps {
  isSessionActive: boolean;
  startTime: Date | null;
  endTime: Date | null;
  breakTime: number;
  isSessionPaused: boolean;
  startSession: () => void;
  pauseUnpause: () => void;
  endSession: (breakDuration?: number) => void;
}

interface StudySessionStateProps {
  isSessionActive: boolean;
  startTime: Date | null;
  endTime: Date | null;
  breakTime: number;
  isSessionPaused: boolean;
}

const StudySessionContext = createContext<StudySessionContextProps>({
  isSessionActive: false,
  startTime: null,
  endTime: null,
  breakTime: 0,
  isSessionPaused: false,
  startSession: () => {},
  pauseUnpause: () => {},
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
    breakTime: 0,
    isSessionPaused: false,
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
        breakTime: studySession.breakTime,
        isSessionPaused: studySession.isSessionPaused,
        startSession,
        pauseUnpause,
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
