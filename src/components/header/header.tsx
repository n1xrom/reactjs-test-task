import React, { useState, useEffect } from "react";

import { Header, HeaderNavigation, FlexGrow } from "./styled";
import { useGlobalState, useGlobalMethods } from "utils/context";
import { ReactComponent as BackArrow } from "assets/icons/back.svg";
import { ReactComponent as GridIcon } from "assets/icons/grid.svg";
import { ReactComponent as ListIcon } from "assets/icons/list.svg";
import Button from "../button";

export default function () {
  const { someStep, step, errors, sort } = useGlobalState();
  const { nextStep, changeSort } = useGlobalMethods();
  const [disabled, setDisabled] = useState(false);

  const backStep = () => {
    nextStep(someStep - 1);
    setDisabled(true);
  };

  useEffect(() => {
    setDisabled(false);
  }, [step, errors]);

  const sortButton = (
    <Button type="link" onClick={changeSort}>
      {sort ? (
        <GridIcon style={{ width: 20, fill: "#fff" }} />
      ) : (
        <ListIcon style={{ width: 20, fill: "#fff" }} />
      )}
    </Button>
  );

  return (
    <Header>
      <HeaderNavigation>
        {step > 0 && (
          <Button type="link" onClick={backStep} disabled={disabled}>
            <BackArrow onClick={backStep} />
          </Button>
        )}
        <strong className="back-title">{`Step #${step + 1}`}</strong>
      </HeaderNavigation>
      <FlexGrow />
      {step === 1 && sortButton}
    </Header>
  );
}
