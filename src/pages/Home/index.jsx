import axios from "axios";
import md5 from "md5";
import { AllHqs, ContainerHq, HomeContainer, Subtitle } from "./styled";

import React, { useState, useEffect } from "react";

import { Products } from "../../components/Products";

import "swiper/swiper.min.css";
export const Home = () => {
  const time = Number(new Date());
  const keyPublic = "dce2bf4d4c777d8ec9437c52278989af";
  const keyPrivate = "9f97c6e21f02ab08019f3d859c4d4b5da3188eb0";
  const hash = md5(time + keyPrivate + keyPublic);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${keyPublic}&hash=${hash}`
      )
      .then((response) => {
        setProducts(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  function percentageFunction(array) {
    return array.length * 0.1;
  }
  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };

  return (
    <HomeContainer>
      <ContainerHq>
        <Subtitle>HQ's Raras</Subtitle>

        <AllHqs>
          {shuffleArray(products).map((product) => (
            <Products
              thumbnail={`${product.thumbnail.path}.${product.thumbnail.extension}`}
              price={product.prices[0].price}
              title={product.title}
              id={product.id}
              key={product.id}
            />
          ))}
        </AllHqs>
      </ContainerHq>
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
      </ContainerHq>
    </HomeContainer>
  );
};
