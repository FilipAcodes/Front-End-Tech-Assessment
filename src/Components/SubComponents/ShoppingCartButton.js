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
  color: red;
  border: none;
  border-radius: 50%;
  height: 10%;
  width: 10%;
  margin-right: 25px;
  font-size: 25px;
  background-color: #eeeeee;

  @media only screen and (max-width: 414px) {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
    width: 35px;
    height: 35px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledIconCart = styled(MdOutlineAddShoppingCart)`
  margin-top: 3px;
  @media only screen and (max-width: 414px) {
    margin-top: 6px;
  }
`;
