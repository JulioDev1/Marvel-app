import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../../components/ProductDetails";
import { ComicContainer, Recharge } from "./style";

export const ComicDetail = () => {
  const { id } = useParams();
  const [comic, setComic] = useState();
  let time = Number(new Date());

  const keyPublic = "dce2bf4d4c777d8ec9437c52278989af";
  const keyPrivate = "9f97c6e21f02ab08019f3d859c4d4b5da3188eb0";
  let hash = md5(time + keyPrivate + keyPublic);

  useEffect(() => {
    console.log("entrou");
    const fetchComic = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics/${id}?ts=${time}&apikey=${keyPublic}&hash=${hash}`
      );
      console.log("results", response.status);
      setComic(response.data.data.results[0]);
    };
    fetchComic();
  }, []);
  console.log(id);
  console.log(
    `http://gateway.marvel.com/v1/public/comics/${id}?ts=${time}&apikey=${keyPublic}&hash=${hash}`
  );
  console.log("comic", comic);

  return (
    <ComicContainer>
      {comic ? (
        <ProductsDetails
          thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          price={comic.prices[0].price}
          title={comic.title}
          id={comic.id}
          key={comic.id}
        />
      ) : (
        <Recharge>carregando</Recharge>
      )}
    </ComicContainer>
  );
};
