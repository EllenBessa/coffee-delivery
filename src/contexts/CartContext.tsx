import { produce } from "immer";
import { ReactNode, useState, createContext } from "react";

export interface CartItem {
  name: string;
  categories: string[];
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  itemsCount: number;
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.name === coffee.name
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  const itemsCount = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, itemsCount }}>
      {children}
    </CartContext.Provider>
  );
}
