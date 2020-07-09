import React from "react";

import { useGlobalState } from "utils/context";
import { Wrapper, Content } from "./styled";
import Header from "../header";
import Footer from "../footer";

export default function({ children }: { children: React.ReactNode }): JSX.Element {
  const { visible } = useGlobalState();

  return (
    <Wrapper visible={visible}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}
