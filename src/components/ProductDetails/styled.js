import styled from "styled-components";

export const PosterLarge = styled.img`
  height: 252px;
  width: 168px;
`;

export const ProductContent = styled.div``;

export const ProductContainer = styled.div`
  background-color: #131415;
  width: 36rem;
  font-family: "Francois One", sans-serif;
  height: 18rem;
  display: flex;
  padding: 15px;
  gap: 15px;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    width: 30rem;
    justify-content: center;
    height: 26rem;
  }
  @media screen and (max-width: 500px) {
    width: 20rem;
    padding: 20px;
  }
  @media screen and (max-width: 300px) {
    flex-direction: column;
    align-items: center;
    width: 20rem;
    justify-content: center;
    height: 26rem;
  }
`;

export const ButtonContent = styled.div`
  max-width: 100%;
  width: 100%;
`;
export const Price = styled.h1`
  color: #3ae541;
`;
export const Button = styled.button`
  border: none;
  background-color: #e53a40;
  font-family: "Francois One", sans-serif;
  color: white;
  width: 100%;
  height: 3rem;
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media screen and (max-width: 700px) {
    gap: 0px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 20px;
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;
