import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsDetails } from "../../components/ProductDetails";
import { useCart } from "../../context/Context";
import { ComicContainer, Recharge } from "./style";

export const ComicDetail = () => {
  const { id } = useParams();
  const [comic, setComic] = useState();
  let time = Number(new Date());
  const { addProduct } = useCart();

  const keyPublic = "dce2bf4d4c777d8ec9437c52278989af";
  const keyPrivate = "9f97c6e21f02ab08019f3d859c4d4b5da3188eb0";
  let hash = md5(time + keyPrivate + keyPublic);

  useEffect(() => {
    const fetchComic = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics/${id}?ts=${time}&apikey=${keyPublic}&hash=${hash}`
      );
      setComic(response.data.data.results[0]);
    };
    fetchComic();
  });
  return (
    <ComicContainer>
      {comic ? (
        <ProductsDetails
          thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          price={comic.prices[0].price}
          title={comic.title}
          id={comic.id}
          key={comic.id}
          onClick={() => addProduct(comic)}
        />
      ) : (
        <Recharge>carregando</Recharge>
      )}
    </ComicContainer>
  );
};
