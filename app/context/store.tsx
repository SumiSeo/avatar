"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  skippedIntro: boolean;
  setSkippedIntro: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  skippedIntro: false,
  setSkippedIntro: (): boolean => true,
});

export const GlobalContextProvider = ({ children }) => {
  const [skippedIntro, setSkippedIntro] = useState<boolean>(false);
  return (
    <GlobalContext.Provider value={{ skippedIntro, setSkippedIntro }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
