import "./styles.css";
import { useState } from "react";
import useCartStore from "./cartStore";
import Cart from "./Cart";
export default function App() {
  const [count, setCount] = useState(10);
  const handleSend = () => {
    useCartStore.setState((state) => ({
      cart: [...state.cart, count],
    }));
  };
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleSend}>Add to cart</button>
      <Cart />
    </div>
  );
}
