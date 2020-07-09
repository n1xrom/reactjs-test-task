import styled from "styled-components";

const Wrapper = styled.div<{ otherSort: boolean; show: boolean }>`
  display: grid;
  grid-template-columns: ${({ otherSort }) =>
    otherSort ? "repeat(auto-fill, minmax(200px, 1fr))" : "1fr"};
  grid-gap: 10px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  justify-content: center;
  transition: 0.3s;
  padding: 20px 10px;
`;

const Card = styled.div<{ show: boolean; sort: boolean }>`
  box-shadow: 0px 0px 5px 0px #b3b3b3;
  padding: 5px;
  display: ${({ sort }) => (sort ? "block" : "flex")};
  align-items: flex-start;
  ${({ show }) => {
    if (show) {
      return `
        transform: translateY(0px);
        opacity: 1;
        transition: 0.5s ease-in-out;
      `;
    }
    return `
        transition: 0.1s opacity,1s transform;
        opacity: 0;
        transform: translateY(50px);
      `;
  }}
`;

const Image = styled.img<{ sort: boolean }>`
  width: ${({ sort }) => (sort ? "100%" : "100px")};
  height: auto;
`;
const Title = styled.p<{ sort: boolean }>`
  ${({ sort }) =>
    sort
      ? ``
      : `
        font-size: 20px;
        padding-left: 10px;`}
  font-weight: bold;
  text-align: center;
`;

export { Wrapper, Card, Image, Title };
