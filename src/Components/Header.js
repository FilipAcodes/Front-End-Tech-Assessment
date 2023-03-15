import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
const Header = () => {
  return (
    <StyledHeader>
      <Cart />
      Fullhaus
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.h1`
  position: relative;
  text-align: center;
  color: white;
  background-color: black;
`;
