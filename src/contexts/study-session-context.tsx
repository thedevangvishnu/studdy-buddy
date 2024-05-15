import { createContext, useContext, useState } from "react";

interface StudySessionContextProps {
  isSessionActive: boolean;
  startSession: () => void;
  endSession: () => void;
}

const StudySessionContext = createContext<SessionContextProps>({
  isSessionActive: false,
  startSession: () => {},
  endSession: () => {},
});

export const StudySessionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState(false);
  const startSession = () => {
    setActive(true);
  };

  const endSession = () => {
    setActive(false);
  };

  return (
    <StudySessionContext.Provider
      value={{
        isSessionActive: active,
        startSession,
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
