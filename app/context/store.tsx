"use client";

import { createContext, useContext, useState } from "react";
import { ChildrenJSXProps } from "../types/ChildrenJsxPropsx";
import { ContextProps } from "../types/Context";

const GlobalContext = createContext<ContextProps>({
  skippedIntro: false,
  setSkippedIntro: (): boolean => true,
  disappearCircles: false,
  setDisappearCircles: (): boolean => true,
  missionNumber: 1,
  setMissionNumber: (): number => 0,
  projectNumber: 1,
  setProjectNumber: (): number => 0,
});

export const GlobalContextProvider = ({ children }: ChildrenJSXProps) => {
  const [skippedIntro, setSkippedIntro] = useState<boolean>(false);
  const [disappearCircles, setDisappearCircles] = useState<boolean>(false);
  const [missionNumber, setMissionNumber] = useState<number>(0);
  const [projectNumber, setProjectNumber] = useState<number>(1);
  return (
    <GlobalContext.Provider
      value={{
        skippedIntro,
        setSkippedIntro,
        disappearCircles,
        setDisappearCircles,
        missionNumber,
        setMissionNumber,
        projectNumber,
        setProjectNumber,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
