import styled from "styled-components";

import { IColors, IWrapper, IRing } from "./types";

const colors: IColors = {
  bg: {
    base: "#1976d2",
    baseHover: "#115293",
    link: "#00000000",
    linkHover: "#1976d20a",
  },
  font: {
    base: "#fff",
    link: "#1976d2",
  },
  pulsar: {
    base: "rgba(255, 255, 255, 0.5)",
    link: "rgba(143, 204, 232, 0.5)",
  },
};

const Wrapper = styled.a<IWrapper>`
  & {
    ${({ disabled }) =>
      disabled
        ? `
      opacity: 0.5;
      pointer-events: none;`
        : ""}
  }
  ${({ style }) => style}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ type }) => `background-color: ${colors.bg[type]};
  color: ${colors.font[type]};`}
  padding: 6px 16px;
  font-size: 14px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  border-radius: 4px;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    ${({ type }) => `background-color: ${colors.bg[`${type}Hover`]}`};
  }
`;

const Pulsar = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
`;

const Ring = styled.div<IRing>`
  position: absolute;
  top: calc(${({ y }) => y || 0}px - 50px);
  left: calc(${({ x }) => x || 0}px - 50px);
  border: 10px solid ${({ type }) => colors.pulsar[type]};
  box-shadow: inset 0 0 100px 0 ${({ type }) => colors.pulsar[type]};
  border-radius: 100%;
  width: 100px;
  height: 100px;
  transform: scale(0);
  animation: pulsar 1s 0s linear;

  @keyframes pulsar {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;

export { Wrapper, Ring, Pulsar };
