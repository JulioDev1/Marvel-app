import styled from "styled-components";

export const ProductPage = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;
  gap: 20px;
  padding: 15px;
  margin-top: 10px;
`;
export const ElementPage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3px;
`;
export const ProductListContainer = styled.div`
  font-family: "Francois One", sans-serif;
  height: 15.5rem;
  max-width: 500px;
  width: 100%;
  border-bottom: 2px solid white;
`;
export const ProductName = styled.p`
  font-size: 20px;
`;
export const Price = styled.p`
  color: #3ae541;
  font-size: 25px;
`;
export const Title = styled.h1`
  color: white;
  font-size: 30px;
`;

export const Total = styled.p`
  font-family: "Francois One", sans-serif;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageSimulated = styled.img`
  width: 117px;
  height: 156px;
`;
export const Button = styled.button`
  height: 2rem;
`;
