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
          <button onClick={onClick}>
            <Trash />
          </button>
        </ElementPage>
      </ProductPage>
    </ProductListContainer>
  );
};
