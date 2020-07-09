import styled from "styled-components";

const Header = styled.div`
  background: #1976d2;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 5px -5px #000;
`;
const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 20px;
  }
`;
const FlexGrow = styled.div`
  flex-grow: 1;
`;

export { Header, HeaderNavigation, FlexGrow };
