import React from "react";

import { useGlobalState } from "utils/context";
import Step1 from "./step1";
import Step2 from "./step2";
import Dashboard from "components/dashboard/dashboard";

interface IStep {
  idx: number;
  Step: JSX.Element;
}

export default function () {
  const { step } = useGlobalState();

  const steps: IStep[] = [
    { idx: 1, Step: <Step1 /> },
    { idx: 2, Step: <Step2 /> },
  ];

  return <Dashboard>{steps[step].Step}</Dashboard>;
}
