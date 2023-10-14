"use client";

import { Dispatch, SetStateAction } from "react";

export interface ContextProps {
  skippedIntro: boolean;
  setSkippedIntro: Dispatch<SetStateAction<boolean>>;
  disappearCircles: boolean;
  setDisappearCircles: Dispatch<SetStateAction<boolean>>;
  missionNumber: number;
  setMissionNumber: Dispatch<SetStateAction<number>>;
  projectNumber: number;
  setProjectNumber: Dispatch<SetStateAction<number>>;
}
