import React from "react";
import styled from "styled-components";

const Checkout = ({ price, name, quantity, image }) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <StyledSideImages src={image}></StyledSideImages>
      <div>
        {name}
        {price}
        {quantity}
      </div>
    </div>
  );
};

export default Checkout;

const StyledSideImages = styled.img`
  @media only screen and (max-width: 375px) {
    height: 60%;
    width: 50%;
    min-width: 50%;
  }
`;
