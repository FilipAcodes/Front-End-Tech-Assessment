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

const CartButton = styled.button`
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: black;
  border: none;
  color: white;
  @media only screen and (max-width: 375px) {
    font-size: 30px;
    margin-top: 7px;
    margin-left: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;
