import { useState } from "react";

import { CartButton } from "@components/CartButton";
import { ProductQuantityInput } from "@components/ProductQuantityInput";

import { useCartContext } from "../../../../hooks/useCartContext";
import {
  CoffeeCardWrapper,
  FooterCoffeeCard,
  CoffeeCardTagWrapper
} from "./styles";

export interface CoffeesCardsProps {
  coffee: {
    name: string;
    categories: string[];
    description: string;
    price: number;
    imageUrl: string;
  };
}

export function CoffeeCard({ coffee }: CoffeesCardsProps) {
  const [quantity, setQuantity] = useState(1);

  const { addCoffeeToCart } = useCartContext();

  const { name, categories, description, price, imageUrl } = coffee;

  const formatCoffeeValue = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL"
    }).format(price);
  };

  function handleAddToCart() {
    const coffeeToCart = {
      ...coffee,
      quantity
    };

    addCoffeeToCart(coffeeToCart);

    setQuantity(1);
  }

  return (
    <CoffeeCardWrapper>
      <img src={imageUrl} alt="" />

      <CoffeeCardTagWrapper>
        {categories.map((category) => {
          return <span key={category}>{category}</span>;
        })}
      </CoffeeCardTagWrapper>

      <h3>{name}</h3>
      <p>{description}</p>

      <FooterCoffeeCard>
        <span>
          R$
          <strong>{formatCoffeeValue(price)}</strong>
        </span>

        <ProductQuantityInput quantity={quantity} setQuantity={setQuantity} />

        <CartButton
          onClick={handleAddToCart}
          variant="card"
          aria-label="Adicionar ao carrinho"
        />
      </FooterCoffeeCard>
    </CoffeeCardWrapper>
  );
}
