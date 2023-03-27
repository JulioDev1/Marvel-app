import { Trash } from "../../icon/Trash";
import {
  Button,
  ElementPage,
  ImageSimulated,
  InfoContent,
  Price,
  ProductListContainer,
  ProductName,
  ProductPage,
} from "./styled";

export const ShoppingCart = ({ thumbnail, title, price, id, onClick }) => {
  return (
    <ProductListContainer key={id}>
      <ProductPage>
        <ImageSimulated src={thumbnail} alt="imagem" />
        <ElementPage>
          <InfoContent>
            <ProductName>{title}</ProductName>
            <Price>{price}</Price>
          </InfoContent>
          <Button onClick={onClick}>
            <Trash />
          </Button>
        </ElementPage>
      </ProductPage>
    </ProductListContainer>
  );
};
