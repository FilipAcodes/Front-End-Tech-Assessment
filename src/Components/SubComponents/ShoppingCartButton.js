import React from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ShoppingCartButton = ({ item }) => {
  const { addItemWithDupeCheck } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItemWithDupeCheck(product);
  };
  return (
    <StyledShoppingCart onClick={() => handleAddToCart(item)}>
      <StyledIconCart />
    </StyledShoppingCart>
  );
};

export default ShoppingCartButton;

const StyledShoppingCart = styled.button`
  @media only screen and (max-width: 375px) {
    color: red;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #eeeeee;
    font-size: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledIconCart = styled(MdOutlineAddShoppingCart)`
  @media only screen and (max-width: 375px) {
    margin-top: 6px;
  }
`;
