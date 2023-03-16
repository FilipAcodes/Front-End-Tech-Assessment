import React from "react";
import styled from "styled-components";
import Stars from "./SubComponents/Stars";
import ShoppingCartButton from "./SubComponents/ShoppingCartButton";

const ItemList = ({ item }) => {
  //The Api sometimes doesn't return any images
  //So I added some extra conditionals
  return (
    <>
      {item.map((e, i) => {
        return (
          <ImageContainer key={e._id}>
            {e.imageURLs[i] ? (
              <StyledSideImages src={e.imageURLs[i]} />
            ) : (
              <StyledSideImages src={e.imageURLs[3]} />
            )}
            <TextContainerForImage>
              <ProductNameH2>{e.fulhausProductName}</ProductNameH2>
              <Stars />
              <PriceShoppingCartContainer>
                <BoldParagraph>{e.retailPrice.toLocaleString()}$</BoldParagraph>
                <ShoppingCartButton item={e} />
              </PriceShoppingCartContainer>
            </TextContainerForImage>
          </ImageContainer>
        );
      })}
    </>
  );
};
const StyledSideImages = styled.img`
  height: 60%;
  width: 60%;
  @media only screen and (max-width: 414px) {
    height: 60%;
    width: 50%;
    min-width: 50%;
  }
`;

const ImageContainer = styled.div`
  border: 2px solid #f1f1f1;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5%;
  margin-bottom: 5%;
  min-height: 40%;
  min-width: 38%;
  @media only screen and (max-width: 414px) {
    display: flex;
    border: 1px solid #f5f6f6;
    position: relative;
    margin-top: 2px;
    margin-left: 1px;
    margin-right: 1px;
    min-height: 100px;
  }
`;

const TextContainerForImage = styled.div`
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
`;

const BoldParagraph = styled.p`
  font-weight: bold;

  @media only screen and (max-width: 414px) {
    position: absolute;
    right: 1;
    bottom: 0;
  }
`;

const ProductNameH2 = styled.h2`
  @media only screen and (max-width: 414px) {
    font-size: 17px;
  }
`;

const PriceShoppingCartContainer = styled.div`
  @media only screen and (min-width: 415px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default ItemList;
