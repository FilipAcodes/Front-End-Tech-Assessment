import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import Checkout from "../Checkout";

const Cart = () => {
  const { addItem } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log(addItem);
  return (
    <>
      <CartButton onClick={toggleSidebar}>
        <AiOutlineShoppingCart />
      </CartButton>
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
        <CartContent>My Order</CartContent>
        {addItem.length > 0 &&
          addItem.map((element, index) => {
            console.log(element);
            return (
              <Checkout
                key={element._id}
                name={element.fulhausProductName}
                price={element.retailPrice}
                image={element.imageURLs && element.imageURLs[index]}
              />
            );
          })}
      </SidebarContainer>
    </>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  height: 80%;
  width: 300px;
  border-radius: 8px;
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

const CartContent = styled.h2`
  font-size: 30px;
  color: black;
  background: #f1f1f1;
`;

export default Cart;
