import React, { useEffect } from "react";

import { ISkeletonProps } from "./types";
import { Wrapper, Skeleton } from "./styled";

export default function({
  children = <div />,
  data,
  circle = false,
  width = "auto",
  height = "auto",
  styles = "",
  test = false,
}: ISkeletonProps): JSX.Element {
  const visible = test ? true : !Boolean(data);
  const [show, setShow] = React.useState(visible);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(visible);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [visible]);

  return (
    <>
      {show && (
        <Wrapper visible={visible} width={width} height={height} circle={circle} styles={styles}>
          <Skeleton visible={visible} />
        </Wrapper>
      )}
      {show ? null : children}
    </>
  );
}
