import styled from "styled-components";

export const HomeContainer = styled.div`
  font-family: "Francois One", sans-serif;
  color: #ffff;
`;
export const AllHqs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  gap: 20px;
`;
export const ContainerRareHq = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  background-color: #3f3f3f;
  flex-direction: column;
  filter: drop-shadow(0px 0px 7px #000);
  width: 400px;
  border: #e53a40 2px solid;
  border-radius: 10px;
  margin-top: 100px;
  padding: 10px;
  gap: 22px;
`;
export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ContainerHq = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  padding: 10px;
  gap: 22px;
`;
export const ButtonLeft = styled.button`
  transform: rotate(-180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4b4b4b;
  filter: drop-shadow(2px -2px 3px #000);
  background-color: #4b4b4b;
  border-radius: 10px;
  border: none;
`;
export const Subtitle = styled.h1`
  font-size: 25px;
`;
export const ButtonRight = styled.button`
  display: flex;
  border-radius: 10px;
  background-color: #4b4b4b;
  filter: drop-shadow(2px 2px 3px #000);
  border: none;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 55px;
  width: 100%;
`;
