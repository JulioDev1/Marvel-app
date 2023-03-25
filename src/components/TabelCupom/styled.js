import styled from "styled-components";

export const Table = styled.div`
  font-family: "Francois One", sans-serif;
  width: 100%;
  max-width: 350px;
  height: 250px;
`;
export const ButtonCupom = styled.button`
  background-color: #e53a40;
  border: none;

  width: 80px;
  color: white;
  font-family: "Francois One", sans-serif;
`;
export const ButtonBuy = styled.button`
  width: 100%;
  font-family: "Francois One", sans-serif;
  color: white;
  background-color: #e53a40;
  border: none;
  height: 40px;
`;
export const CupomContainer = styled.div`
  width: 350px;
  display: flex;
  gap: 10px;
`;
export const Text = styled.h1`
  color: white;
  font-size: 20px;
`;
export const TextTotal = styled.p`
  color: #e53a40;
  font-size: 20px;
`;
export const Input = styled.input`
  background-color: #484848;
  height: 40px;
  width: 100%;
  ::placeholder {
    color: white;
    font-family: "Francois One";
    padding: 10px;
  }
  border: none;
`;
export const PriceContent = styled.div`
  margin-bottom: 20px;
`;
export const InfoProductsContainer = styled.div`
  background-color: rgb(63, 63, 63);
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;
