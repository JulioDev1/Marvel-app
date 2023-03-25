import {
  PosterLarge,
  ProductContent,
  ProductContainer,
  Title,
  InfoProduct,
  ButtonContent,
  Button,
  Price,
} from "./styled";

export const ProductsDetails = ({ thumbnail, alt, title, price, id }) => {
  return (
    <ProductContainer>
      <ProductContent>
        <PosterLarge src={thumbnail} alt={alt} />
      </ProductContent>
      <InfoProduct>
        <Title>{title}</Title>

        <ButtonContent>
          <Price>${price}</Price>
          <Button>adicionar ao carrinho</Button>
        </ButtonContent>
      </InfoProduct>
    </ProductContainer>
  );
};
