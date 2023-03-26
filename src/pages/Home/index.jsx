import axios from "axios";
import md5 from "md5";
import {
  AllHqs,
  BannerContainer,
  ButtonContainer,
  ButtonLeft,
  ButtonRight,
  ContainerHq,
  ContainerRareHq,
  HomeContainer,
  PageHq,
  Subtitle,
} from "./styled";

import React, { useState, useEffect } from "react";

import { Next } from "../../icon/Next";

import { Products } from "../../components/Products";

import { useCart } from "../../context/Context";
const LIMIT = 24;

export const Home = () => {
  const time = Number(new Date());
  const keyPublic = "dce2bf4d4c777d8ec9437c52278989af";
  const keyPrivate = "9f97c6e21f02ab08019f3d859c4d4b5da3188eb0";
  const hash = md5(time + keyPrivate + keyPublic);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { addProduct } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const offset = (page - 1) * LIMIT;

      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${keyPublic}&hash=${hash}&offset=${offset}&limit=${LIMIT}`
      );

      setProducts(response.data.data.results);
      setTotalPages(Math.ceil(response.data.data.total / LIMIT));
    };
    fetchData();
  }, [page]);

  useEffect(() => {});
  ////uma requisição para fazer a paginação(confesso que achei essa parte bem difici)
  const handleAddPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };

  const percentageItens = (array) => {
    const item = shuffleArray(array);
    const itensPercentage = Math.round((10 / 100) * item.length);
    let itensSelected = item.slice(0, itensPercentage);
    return itensSelected;
  };

  return (
    <HomeContainer>
      <BannerContainer>
        <ContainerRareHq>
          <Subtitle>HQ's Raras</Subtitle>

          <AllHqs>
            {percentageItens(products).map((product) => (
              <Products
                thumbnail={`${product.thumbnail.path}.${product.thumbnail.extension}`}
                price={product.prices[0].price}
                title={product.title}
                id={product.id}
                key={product.id}
                onClick={() => addProduct(product)}
              />
            ))}
          </AllHqs>
        </ContainerRareHq>
      </BannerContainer>
      <ContainerHq>
        <Subtitle> Todos os Hq</Subtitle>
        <PageHq>
          <AllHqs>
            {products.map((product) => (
              <Products
                thumbnail={`${product.thumbnail.path}.${product.thumbnail.extension}`}
                price={product.prices[0].price}
                title={product.title}
                id={product.id}
                key={product.id}
              />
            ))}
          </AllHqs>
        </PageHq>
        <ButtonContainer>
          <ButtonLeft onClick={handlePrevPage} disabled={page === 1}>
            <Next />
          </ButtonLeft>
          <span>{`Page ${page} of ${totalPages}`}</span>
          <ButtonRight onClick={handleAddPage} disabled={page === totalPages}>
            <Next />
          </ButtonRight>
        </ButtonContainer>
      </ContainerHq>
    </HomeContainer>
  );
};
