import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Stars = () => {
  return (
    <StarContainer>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </StarContainer>
  );
};

export default Stars;

const StarContainer = styled.div`
  color: #fda115;
`;
