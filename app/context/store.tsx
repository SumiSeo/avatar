"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenJSXProps } from "../types/ChildrenJsxPropsx";
import { ContextProps } from "../types/Context";

const GlobalContext = createContext<ContextProps>({
  skippedIntro: false,
  setSkippedIntro: (): boolean => true,
  disappearCircles: false,
  setDisappearCircles: (): boolean => true,
});

export const GlobalContextProvider = ({ children }: ChildrenJSXProps) => {
  const [skippedIntro, setSkippedIntro] = useState<boolean>(false);
  const [disappearCircles, setDisappearCircles] = useState<boolean>(false);
  return (
    <GlobalContext.Provider
      value={{
        skippedIntro,
        setSkippedIntro,
        disappearCircles,
        setDisappearCircles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
