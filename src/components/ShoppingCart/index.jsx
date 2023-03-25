import { Trash } from "../../icon/Trash";
import {
  ElementPage,
  ImageSimulated,
  InfoContent,
  Price,
  ProductListContainer,
  ProductName,
  ProductPage,
  Title,
  Total,
} from "./styled";

export const ShoppingCart = () => {
  return (
    <ProductListContainer>
      <Title>Product on the no Cart</Title>
      <ProductPage>
        <ImageSimulated></ImageSimulated>
        <ElementPage>
          <InfoContent>
            <ProductName>NameProduct</ProductName>
            <Price>15 R$</Price>
          </InfoContent>
          <Trash />
        </ElementPage>
      </ProductPage>
    </ProductListContainer>
  );
};
