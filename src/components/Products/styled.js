import styled from "styled-components";

export const ProductConteiner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  max-height: 400px;
`;
export const Price = styled.h1`
  color: #3ae541;
  font-size: 12px;
`;
export const Poster = styled.img`
  width: 190px;
  height: 250px;
`;
export const Title = styled.h1`
  font-size: 18px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
`;
export const InfoContainer = styled.div`
  margin-top: 5px;
`;
