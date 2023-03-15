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
  const total = addItem.reduce((acc, element) => {
    return (
      acc +
      element.items.reduce((subAcc, cartitem) => {
        return subAcc + cartitem.quantity * cartitem.retailPrice;
      }, 0)
    );
  }, 0);
  return (
    <>
      <CartButton onClick={toggleSidebar}>
        <AiOutlineShoppingCart />
      </CartButton>
      <SidebarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>X</CloseButton>
        <CartContent>My Order</CartContent>
        {addItem.length > 0 &&
          addItem.map((element) => {
            return element.items.map((cartitem, index) => {
              return (
                <Checkout
                  key={cartitem._id}
                  name={cartitem.fulhausProductName}
                  price={cartitem.retailPrice}
                  image={cartitem.imageURLs && cartitem.imageURLs[index]}
                  quantity={cartitem.quantity}
                />
              );
            });
          })}
        <Total>Total : ${total.toFixed(2)}</Total>
        <CheckOutButton>Checkout</CheckOutButton>
      </SidebarContainer>
    </>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 9999;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
  border: none;
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
  border-bottom: 1px solid black;
`;

const CheckOutButton = styled.button`
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 50px;
    font-size: 20px;
  }
  color: white;
  background: black;
  border: none;
`;
const Total = styled.p`
  color: black;
`;
export default Cart;
