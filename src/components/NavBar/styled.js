import styled from "styled-components";

export const NavBarContainer = styled.div`
  background-color: #000;
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 25vw;
  height: 2vh;
  gap: 1vh;
`;
export const Input = styled.input`
  width: 90%;
  height: 40px;
  background-color: #363636;
  border: none;
  ::placeholder {
    font-family: "Francois One", sans-serif;
    color: #dbdbdb;
    padding: 10px 16px 10px 13px;
  }
`;
export const LogoMarvel = styled.img`
  width: 171px;
  height: 94px;
`;
export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e53a40;
  border-radius: 4px;
  width: 3vw;
  height: 4vh;
`;
export const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonQuantity = styled.div`
  border-radius: 10px;
  background-color: #e53a40;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 18px;
  right: 195px;
  top: 6rem;
`;
export const Quantity = styled.p`
  color: white;
`;
