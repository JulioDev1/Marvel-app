import React from "react";
import {
  Poster,
  Price,
  ProductConteiner,
  Title,
  InfoContainer,
  TitleContainer,
} from "./styled";

export const Products = ({ thumbnail, title, price, id }) => {
  return (
    <ProductConteiner key={id}>
      <Poster src={thumbnail} alt="poster" />
      <InfoContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Price>$ {price}</Price>
      </InfoContainer>
    </ProductConteiner>
  );
};
