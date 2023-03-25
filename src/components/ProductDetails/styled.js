import styled from "styled-components";

export const PosterLarge = styled.img`
  height: 252px;
  width: 168px;
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #131415;
  border-radius: 10px;
  font-family: "Francois One", sans-serif;
  width: 50rem;
  flex-direction: row;
`;

export const ButtonContent = styled.div`
  display: flex-end;
  width: 100%;
`;
export const Price = styled.h1`
  color: #3ae541;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  font-family: "Francois One", sans-serif;
  background-color: #e53a40;
  color: white;
  width: 90%;
  padding: 10px;
  height: 30px;
`;

export const InfoProduct = styled.div`
  margin-top: 74px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 252px;
  width: 300px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 20px;
`;
