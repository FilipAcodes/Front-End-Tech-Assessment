import React from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Checkout = ({ id, price, name, quantity, image }) => {
  const { removeItemWithDupeCheck, addItem, setAddItem } =
    useContext(CartContext);
  const handleDelete = () => {
    const updatedItems =
      addItem.length > 0
        ? addItem[0].items.filter((item) => item._id !== id)
        : [];
    setAddItem([{ items: updatedItems }]);
  };

  return (
    <CartContainer>
      <Container>
        <StyledSideImages src={image}></StyledSideImages>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        <button onClick={() => removeItemWithDupeCheck({ _id: id, quantity })}>
          MINUS
        </button>
        <TextContainerForImage>
          <ItemName>{name}</ItemName>
        </TextContainerForImage>
        <ContainerForPriceQTE>
          <PriceParagraph>${price.toLocaleString()}</PriceParagraph>
          <p>{quantity}x</p>
        </ContainerForPriceQTE>
      </Container>
    </CartContainer>
  );
};

const StyledSideImages = styled.img`
  @media only screen and (max-width: 375px) {
    height: 60%;
    width: 50%;
    min-width: 50%;
    float: left;
  }
`;

const CartContainer = styled.div`
  display: flex;
  background: #f1f1f1;
  color: black;
`;
const TextContainerForImage = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
`;

const ItemName = styled.p`
  font-size: 18px;
`;

const ContainerForPriceQTE = styled.div`
  display: flex;
  font-weight: normal;
  justify-content: space-between;
  position: absolute;
  right: 0%;
  bottom: 0%;
  margin-right: 5px;
  @media only screen and (max-width: 375px) {
    font-size: 20px;
    gap: 85px;
  }
`;
const Container = styled.div`
  height: 0%;
  position: relative;
`;
const PriceParagraph = styled.p`
  color: #837d7f;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
export default Checkout;
