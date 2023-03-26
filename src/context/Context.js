import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const addProduct = (comic) => {
    setCart([...cart, comic]);
    setTotal(total + parseFloat(comic.prices[0].price));
  };

  const removeProduct = (comic) => {
    setCart(cart.filter((item) => item.id !== comic.id));
    setTotal(total - parseFloat(comic.prices[0].price));
  };

  console.log("produto", cart);
  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, total }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
