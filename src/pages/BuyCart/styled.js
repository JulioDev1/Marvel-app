import styled from "styled-components";

export const ListOfProducts = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  width: 100%;
  max-height: 100%;
  height: 200px;
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
  height: 300px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background-color: rgb(19, 20, 21);
    width: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(229, 58, 64);
    height: 10px;
  }
`;
