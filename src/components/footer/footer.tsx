import React, { useEffect, useState } from "react";

import Button from "../button";
import { useGlobalState, useGlobalMethods } from "utils/context";
import { Wrapper } from "./styled";
import { IDisabledBtnState } from "./types";

export default function() {
  const { step, someStep, errors } = useGlobalState();
  const { nextStep } = useGlobalMethods();
  const [disabled, setDisabled] = useState<IDisabledBtnState>({
    prev: false,
    next: false,
  });
 
  const setStep = (num: number, name: keyof IDisabledBtnState) => () => {
    nextStep(num);
    setDisabled(prev => ({ ...prev, [name]: true }));
  };

  useEffect(() => {
    setDisabled({ prev: false, next: false });
  }, [step, errors]);

  return (
    <Wrapper>
      {step > 0 && step < 2 ? (
        <Button type="link" onClick={setStep(someStep - 1, "prev")} disabled={disabled.prev}>
          Prev
        </Button>
      ) : (
        <div />
      )}
      {step < 1 && (
        <Button onClick={setStep(someStep + 1, "next")} disabled={disabled.next}>
          Next
        </Button>
      )}
    </Wrapper>
  );
}
