import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <p>Contact Us</p>
      <p>Socials</p>
    </StyledFooterContainer>
  );
};

export default Footer;

const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  color: white;
`;
