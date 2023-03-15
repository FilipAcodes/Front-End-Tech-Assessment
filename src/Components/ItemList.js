import React from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Stars from "./SubComponents/Stars";

const ItemList = ({ item }) => {
  const { addItemWithDupeCheck } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItemWithDupeCheck(product);
  };
  return (
    <>
      {item.map((e, i) => {
        return (
          <ImageContainer key={e._id}>
            <StyledSideImages src={e.imageURLs[i]}></StyledSideImages>
            <TextContainerForImage>
              <ProductNameH2>{e.fulhausProductName}</ProductNameH2>
              <BoldParagraph>
                Price: {e.retailPrice.toLocaleString()}$
              </BoldParagraph>
              <Stars />
            </TextContainerForImage>
            <button onClick={() => handleAddToCart(e)}>
              <StyledShoppingCart />
            </button>
          </ImageContainer>
        );
      })}
    </>
  );
};
const StyledSideImages = styled.img`
  @media only screen and (max-width: 375px) {
    height: 60%;
    width: 50%;
    min-width: 50%;
  }
`;

const ImageContainer = styled.div`
  @media only screen and (max-width: 375px) {
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
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }
`;

const StyledShoppingCart = styled(MdOutlineAddShoppingCart)`
  @media only screen and (max-width: 375px) {
    color: red;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #eeeeee;
    border-radius: 8px;
    font-size: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const BoldParagraph = styled.p`
  @media only screen and (max-width: 375px) {
    font-weight: bold;
    position: absolute;
    right: 1;
    bottom: 0;
  }
`;

const ProductNameH2 = styled.h2`
  @media only screen and (max-width: 375px) {
    font-size: 17px;
  }
`;

const StarContainer = styled.div`
  color: #fda115;
`;

export default ItemList;
