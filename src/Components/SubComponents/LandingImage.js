import React from "react";
import styled from "styled-components";

const LandingImage = ({ imagesrc }) => {
  return <StyledLandingImage src={imagesrc}></StyledLandingImage>;
};

export default LandingImage;

const StyledLandingImage = styled.img`
  height: 30%;
  width: 30%;
  float: left;
`;
