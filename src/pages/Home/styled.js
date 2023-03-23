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
export const ContainerHq = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
