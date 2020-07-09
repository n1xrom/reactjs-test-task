import styled from "styled-components";

import { IBorder, ILabel, IHelperText, IShowPassword } from "./types";

const Wrapper = styled.div`
  margin: 15px 0px 10px;
  width: 100%;
`;
const Field = styled.div`
  position: relative;
  padding: 12px 10px;
  cursor: text;
`;
const Label = styled.span<ILabel>`
  z-index: 2;
  transform: ${({ activeLabel }) =>
    activeLabel ? "translate(10px, -10px) scale(0.9)" : "translate(14px, 13px) scale(1)"};
  pointer-events: none;
  font-size: 14px;
  transition: 0.35s;
  top: 0;
  left: ${({ activeLabel }) => (activeLabel ? "13px" : "7px")};
  position: absolute;
  color: ${({ activeLabel, error }) =>
    error ? "#d9534f" : activeLabel ? "#5cb85c" : "rgba(0, 0, 0, 0.54)"};

  .require-point {
    color: #d9534f;
  }
`;
const InputField = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  input {
    border: none;
    box-shadow: none;
    outline-offset: 0;
    outline: none;
    z-index: 1;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    background: inherit;
    min-height: 20px;
  }
  @keyframes autofill {
    to {
      background: transparent;
    }
  }
  input:-webkit-autofill {
    animation-name: autofill;
    -webkit-animation-name: autofill;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
`;
const HelperText = styled.div<IHelperText>`
  color: ${({ error }) => (error ? "#d9534f" : "rgba(0, 0, 0, 0.54)")};
  font-size: 12px;
  opacity: ${({ helperText, error }) => (error || helperText ? 1 : 0)};
  transition: 0.5s;
  margin: 5px 0 0;
  min-height: 16px;
`;
const Border = styled.div<IBorder>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ error, activeLabel }) =>
    error ? "#d9534f" : activeLabel ? "#5cb85c" : "#ddd"};
  border-top: none;
  z-index: 0;
  transition: 0.3s;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    height: 10px;
    transition: 0.3s;
  }
  &:before {
    border-top-right-radius: 4px;
    right: -1px;
    width: ${({ activeLabel, labelWidth, required }) =>
      activeLabel && labelWidth
        ? `calc(100% - ${required ? 35 : 25}px - ${labelWidth}px)`
        : "calc(95% + 1px)"};
    border-top: 1px solid
      ${({ error, activeLabel }) => (error ? "#d9534f" : activeLabel ? "#5cb85c" : "#ddd")};
  }
  &:after {
    border-top-left-radius: 4px;
    left: -1px;
    width: calc(5% + 1px);
    border-top: 1px solid
      ${({ error, activeLabel }) => (error ? "#d9534f" : activeLabel ? "#5cb85c" : "#ddd")};
  }
`;
const ShowPassword = styled.img<IShowPassword>`
  display: ${({ type }) => (type === "password" ? "block" : "none")};
  width: 20px;
  cursor: pointer;
`;
export { Wrapper, Field, InputField, Border, ShowPassword, Label, HelperText };
