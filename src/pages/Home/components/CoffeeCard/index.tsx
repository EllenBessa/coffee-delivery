import { useState } from "react";

import { Minus, Plus } from "@phosphor-icons/react";

import {
  CoffeeCardWrapper,
  FormCoffeeCard,
  FooterCoffeeCard,
  CoffeeCardTagWrapper
} from "./styles";
import { CartButton } from "../../../../components/CartButton";

interface CoffeesCardsProps {
  coffee: {
    name: string;
    tags: string[];
    description: string;
    price: number;
    imageUrl: string;
  };
}

export function CoffeeCard({ coffee }: CoffeesCardsProps) {
  const [quantity, setQuantity] = useState(1);

  const { name, tags, description, price, imageUrl } = coffee;

  function handleDecreaseQuantity() {
    if (quantity <= 1) {
      return;
    }

    setQuantity((state) => state - 1);
  }

  function handleIncreaseQuantity() {
    if (quantity >= 99) {
      return;
    }

    setQuantity((state) => state + 1);
  }

  return (
    <CoffeeCardWrapper>
      <img src={imageUrl} alt="" />

      <CoffeeCardTagWrapper>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </CoffeeCardTagWrapper>

      <h3>{name}</h3>
      <p>{description}</p>

      <FooterCoffeeCard>
        <span>
          R$
          <strong>{price}</strong>
        </span>
        <FormCoffeeCard action="">
          <button
            type="button"
            onClick={handleDecreaseQuantity}
            aria-label="Diminuir quantidade"
          >
            <Minus size={14} weight="bold" />
          </button>

          <label htmlFor="">{quantity}</label>

          <button
            type="button"
            onClick={handleIncreaseQuantity}
            aria-label="Aumentar quantidade"
          >
            <Plus size={14} weight="bold" />
          </button>
        </FormCoffeeCard>

        <CartButton variant="card" aria-label="Adicionar ao carrinho" />
      </FooterCoffeeCard>
    </CoffeeCardWrapper>
  );
}
