import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Poster,
  Price,
  ProductConteiner,
  Title,
  InfoContainer,
  TitleContainer,
  Button,
} from "./styled";

export const Products = ({ thumbnail, title, price, id, onClick }) => {
  return (
    <ProductConteiner key={id}>
      <Link to={`/${id}`}>
        <Poster src={thumbnail} alt="poster" />
      </Link>
      <InfoContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Price>R$ {price}</Price>
        <Button onClick={onClick}>Adicionar ao Carrinho</Button>
      </InfoContainer>
    </ProductConteiner>
  );
};
