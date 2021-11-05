import React, { useState } from "react";

const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const update = (product) => {
    // setCartItem([...cartItem, product]);
    // console.log(cartItem);
  };

  return (
    <CartContext.Provider value={[cartItem, setCartItem, update]}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
