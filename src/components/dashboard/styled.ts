import styled from "styled-components";

const Wrapper = styled.div<{ visible: boolean }>`
  transition: 0.3s cubic-bezier(0.14, -0.44, 0.42, 1);
  position: relative;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  ${({ visible }) =>
    visible
      ? `
    right: 0;
    opacity: 1;`
      : `
    right: 50px;
    opacity: 0;`}
`;
const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export { Wrapper, Content };
