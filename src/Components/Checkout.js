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
  @media only screen and (min-width: 415px) {
    height: 50%;
    width: 50%;
    float: left;
    object-fit: contain;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
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
  align-items: baseline;
`;
const TextContainerForImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const ItemName = styled.p`
  font-size: 18px;
  @media only screen and (min-width: 415px) {
    text-align: center;
    font-size: 25px;
  }
`;

const ContainerForPriceQTE = styled.div`
  display: flex;
  font-weight: normal;
  justify-content: space-between;
  position: absolute;
  right: 0%;
  bottom: 0%;
  margin-right: 5px;
  @media only screen and (min-width: 415px) {
    gap: 6px;
  }
  @media only screen and (max-width: 414px) {
    font-size: 20px;
    gap: 18px;
  }
`;
const Container = styled.div`
  @media only screen and (max-width: 414px) {
    height: 0%;
    position: relative;
  }
  position: relative;
`;
const PriceParagraph = styled.p`
  color: #837d7f;
`;

const DeleteButton = styled.button`
  font-size: 20px;
  color: red;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  bottom: 15%;
  right: 2%;
  @media only screen and (min-width: 415px) {
    margin-bottom: 1px;
    right: 1.3%;
  }
`;
const ButtonNoBorder = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  margin-top: 3px;
  @media only screen and (min-width: 415px) {
    margin-top: 12px;
  }
`;
export default Checkout;
