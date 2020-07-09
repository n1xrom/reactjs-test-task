import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin: 100px 0 0;
`;
const Welcome = styled.p`
  margin: 20px 0;
  text-align: center;
  width: 50%;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export { Wrapper, Avatar, Welcome };
