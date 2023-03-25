import { ShoppingCart } from "../../components/ShoppingCart";
import { TabelCupom } from "../../components/TabelCupom";
import { ListOfProducts } from "./styled";

export const BuyCart = () => {
  return (
    <ListOfProducts>
      <ShoppingCart />
      <TabelCupom />
    </ListOfProducts>
  );
};
