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
  return (
    <Table>
      <Text>Cupom</Text>

      <CupomContainer>
        <Input type="text" placeholder="Inserir Cupom" />
        <ButtonCupom>Comprar</ButtonCupom>
      </CupomContainer>
      <InfoProductsContainer>
        <PriceContent>
          <Text>Quantity:24-R$</Text>
          <Text>Price:12-R$</Text>
        </PriceContent>
        <TextTotal>Total: 15R$</TextTotal>
        <ButtonBuy></ButtonBuy>
      </InfoProductsContainer>
    </Table>
  );
};
