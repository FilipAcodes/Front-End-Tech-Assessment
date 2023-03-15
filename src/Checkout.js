import React from "react";
import styled from "styled-components";

const Checkout = ({ price, name, quantity, image }) => {
  return (
    <CartContainer>
      <Container>
        <StyledSideImages src={image}></StyledSideImages>
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
    gap: 45px;
  }
`;
const Container = styled.div`
  height: 0%;
  position: relative;
`;
const PriceParagraph = styled.p`
  color: #837d7f;
`;
export default Checkout;
