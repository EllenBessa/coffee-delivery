import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}
