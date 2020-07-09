import styled from "styled-components";

import { ISkeletonWrapper } from "./types";

const Wrapper = styled.div<ISkeletonWrapper>`
  & {
    ${({ styles }) => styles}
  }
  position: relative;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: ${({ width }) => (width ? `${width}` : "auto")};
  ${({ circle, width, height }) => {
    if (circle) {
      return `
      border-radius: 100%;
      height: ${width};
    `;
    }
    return `
    height: ${height ? `${height}` : "auto"};
    border-radius: 5px;
  `;
  }};
  overflow: hidden;
  background: #ddd;
  transition: 0.5s;
`;
const Skeleton = styled.div<{ visible: boolean }>`
  @keyframes progress {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ddd 10%, #fff 60%, #ddd);
  animation: progress 1s ease-in-out infinite;
`;
export { Wrapper, Skeleton };
