import styled from "styled-components";

export const ListOfProducts = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  width: 100%;
  max-height: 100%;
  height: 400px;
  box-sizing: border-box;
  gap: 10px;
  height: 40rem;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
