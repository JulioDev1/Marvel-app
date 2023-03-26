import { ShoppingCart } from "../../components/ShoppingCart";
import { TabelCupom } from "../../components/TabelCupom";
import { ListOfProducts, ProductContainer } from "./styled";
import { useCart } from "../../context/Context";
export const BuyCart = () => {
  const { removeProduct, cart } = useCart();
  return (
    <ListOfProducts>
      <ProductContainer>
        {cart.map((item) => (
          <ShoppingCart
            thumbnail={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            title={item.title}
            price={item.price}
            id={item.id}
            onClick={() => removeProduct(item)}
          />
        ))}
      </ProductContainer>
      <TabelCupom />
    </ListOfProducts>
  );
};
