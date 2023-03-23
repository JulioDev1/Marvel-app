import axios from "axios";
import md5 from "md5";
import {
  AllHqs,
  BannerContainer,
  ContainerHq,
  ContainerRareHq,
  HomeContainer,
  Subtitle,
} from "./styled";

import React, { useState, useEffect } from "react";

import { Products } from "../../components/Products";

import { Pagination } from "../../components/Pagination";
const LIMIT = 12;

export const Home = () => {
  const time = Number(new Date());
  const keyPublic = "dce2bf4d4c777d8ec9437c52278989af";
  const keyPrivate = "9f97c6e21f02ab08019f3d859c4d4b5da3188eb0";
  const hash = md5(time + keyPrivate + keyPublic);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${keyPublic}&hash=${hash}&offset=24&limit=${LIMIT}`
      )
      .then((response) => {
        setProducts(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // const percentageArray = (array) => {
  //   let newArray = [...array];
  //   return parseInt(newArray.length * 0.1);
  // };
  // const percentageItensInArray = (array) => {
  //   let newArray = [...array];
  // };
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
              />
            ))}
          </AllHqs>
        </ContainerRareHq>
      </BannerContainer>
      <ContainerHq>
        <Subtitle> Todos os Hq</Subtitle>

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
        <Pagination limit={12} total={1200} offset={240} />
      </ContainerHq>
    </HomeContainer>
  );
};
