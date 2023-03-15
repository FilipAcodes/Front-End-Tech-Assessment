import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CartButton onClick={toggleSidebar}>
        <AiOutlineShoppingCart />
      </CartButton>
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
        {children}
      </SidebarContainer>
    </>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  height: 100%;
  width: 300px;
  background-color: #fff;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 9999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
`;

export default Cart;

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
