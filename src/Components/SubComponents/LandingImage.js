import React from "react";
import styled from "styled-components";

const LandingImage = ({ imagesrc }) => {
  return <StyledLandingImage src={imagesrc}></StyledLandingImage>;
};

export default LandingImage;

const StyledLandingImage = styled.img`
  height: 0%;
  width: 0%;
  @media only screen and (min-width: 415px) {
    padding-top: 10px;
    padding-left: 10px;
    height: 90vh;
    width: 30%;
    float: left;
  }
`;
