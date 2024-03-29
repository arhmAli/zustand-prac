import React from "react";
import useCartStore from "./cartStore";
import useStore from "./useStore";

const Cart = () => {
  const cart = useStore(useCartStore, (state) => state.cart) ?? [];
  const total = cart.reduce((a, b) => a + b, 0);
  return <h1>{total}</h1>;
};
export default Cart;
