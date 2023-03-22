import axios from "axios";
import md5 from "md5";
import { AllHqs, ContainerHq, HomeContainer } from "./styled";
import React, { useState, useEffect } from "react";
import { Products } from "../../components/Products";

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

  // console.log(products);
  products.forEach((product) => {
    console.log(product);
  });

  return (
    <HomeContainer>
      <ContainerHq>
        <h1>All Hqs</h1>
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
