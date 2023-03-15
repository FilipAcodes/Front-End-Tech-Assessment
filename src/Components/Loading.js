import styled, { keyframes } from "styled-components";
import { VscLoading } from "react-icons/vsc";

const Loading = ({ width, height, marginl, margint }) => {
  return (
    <CenterContainer>
      <RotatingLoad />
    </CenterContainer>
  );
};

export default Loading;

const rotation = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;
const RotatingLoad = styled(VscLoading)`
  animation: ${rotation} 1s linear infinite;
  @media only screen and (max-width: 375px) {
    font-size: 45px;
  }
`;

const CenterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
