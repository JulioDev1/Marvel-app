import { useCart } from "../../context/Context";
import {
  ButtonBuy,
  ButtonCupom,
  CupomContainer,
  InfoProductsContainer,
  Input,
  PriceContent,
  Table,
  Text,
  TextTotal,
} from "./styled";

export const TabelCupom = () => {
  const { total } = useCart();
  return (
    <Table>
      <Text>Cupom</Text>

      <CupomContainer>
        <Input type="text" placeholder="Inserir Cupom" />
        <ButtonCupom>Aplicar Cupom</ButtonCupom>
      </CupomContainer>
      <InfoProductsContainer>
        <PriceContent>
          <Text>Quantidade:-</Text>
          <Text>Preço total:{total}-R$</Text>
        </PriceContent>
        <ButtonBuy>Comprar</ButtonBuy>
      </InfoProductsContainer>
    </Table>
  );
};
