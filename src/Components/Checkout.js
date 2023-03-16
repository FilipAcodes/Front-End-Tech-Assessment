import React from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
const Checkout = ({ id, price, name, quantity, image }) => {
  const { removeItemWithDupeCheck, addItem, setAddItem, addItemWithDupeCheck } =
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
        <DeleteButton onClick={handleDelete}>
          <BsFillTrash3Fill />
        </DeleteButton>
        <TextContainerForImage>
          <ItemName>{name}</ItemName>
        </TextContainerForImage>
        <ContainerForPriceQTE>
          <PriceParagraph>${price.toLocaleString()}</PriceParagraph>
          <ButtonNoBorder
            onClick={() => removeItemWithDupeCheck({ _id: id, quantity })}
          >
            -
          </ButtonNoBorder>
          <p>{quantity}x</p>
          <ButtonNoBorder
            onClick={() => addItemWithDupeCheck({ _id: id, quantity })}
          >
            +
          </ButtonNoBorder>
        </ContainerForPriceQTE>
      </Container>
    </CartContainer>
  );
};

const StyledSideImages = styled.img`
  @media only screen and (max-width: 414px) {
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
  @media only screen and (max-width: 414px) {
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
  @media only screen and (max-width: 414px) {
    font-size: 20px;
    gap: 18px;
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
  @media only screen and (max-width: 414px) {
    position: absolute;
    bottom: 15%;
    right: 2%;
    font-size: 20px;
    color: red;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;
const ButtonNoBorder = styled.button`
  @media only screen and (max-width: 414px) {
    border: 1px solid black;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    margin-top: 3px;
  }
`;
export default Checkout;
