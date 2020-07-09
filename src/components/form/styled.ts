import styled from "styled-components";

import { IForm } from "./types";

const Form = styled.form<IForm>`
  & {
    ${({ styles }) => styles}
  }
  width: ${({ width }) => width || "100%"};
`;

export { Form };
