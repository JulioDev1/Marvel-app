import React from "react";
import { Poster, Price, ProductConteiner, Title } from "./styled";

export const Products = ({ thumbnail, title, price, id }) => {
  return (
    <ProductConteiner key={id}>
      <Poster src={thumbnail} alt="poster" />
      <Title>{title}</Title>
      <Price>$ {price}</Price>
    </ProductConteiner>
  );
};
