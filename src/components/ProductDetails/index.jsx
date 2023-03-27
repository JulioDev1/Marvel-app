import { useCart } from "../../context/Context";
import {
  PosterLarge,
  ProductContainer,
  Title,
  InfoProduct,
  ButtonContent,
  Button,
  Price,
} from "./styled";

export const ProductsDetails = ({
  thumbnail,
  alt,
  title,
  price,
  id,
  onClick,
}) => {
  return (
    <ProductContainer key={id}>
      <PosterLarge src={thumbnail} alt={alt} />
      <InfoProduct>
        <Title>{title}</Title>
        <ButtonContent>
          <Price>${price}</Price>
          <Button onClick={onClick}>adicionar ao carrinho</Button>
        </ButtonContent>
      </InfoProduct>
    </ProductContainer>
  );
};
