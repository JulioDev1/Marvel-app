import styled from "styled-components";

export const NavBarContainer = styled.div`
  background-color: #131415;
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 300px) {
    padding: 20px;
  }
`;
export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 25vw;
  height: 2vh;
  gap: 1vh;

  @media screen and (max-width: 1280px) {
    width: 60%;
    padding: 10px;
    gap: 0.7vh;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  font-family: "Francois One", sans-serif;
  background-color: #202020;
  padding: 10px 16px 10px 13px;
  border: none;
  color: #dbdbdb;
  ::placeholder {
    font-family: "Francois One", sans-serif;
    color: #dbdbdb;
    padding: 3px 4px 1px 1px;
  }
`;
export const LogoMarvel = styled.img`
  width: 171px;
  height: 94px;
  @media screen and (max-width: 768px) {
    width: 121px;
    height: 55px;
  }
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e53a40;
  border-radius: 4px;
  width: 4rem;
  height: 2.5rem;
`;
export const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconQuantity = styled.div`
  border-radius: 10px;
  background-color: #e53a40;
  color: white;
  width: 18px;
  display: flex;
  align-items: center;
  z-index: 1;
  left: 0.7rem;
  top: 1rem;
  justify-content: center;
  position: absolute;
`;
export const CartIcon = styled.div`
  position: relative;
  @media screen and (max-width: 680px) {
    right: 7px;
  }
`;
export const Quantity = styled.p`
  color: white;
  position: absolute;
`;
