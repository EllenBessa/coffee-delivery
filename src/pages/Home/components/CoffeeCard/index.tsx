import { CartButton } from "@components/CartButton";
import { ProductQuantityInput } from "@components/ProductQuantityInput";

import {
  CoffeeCardWrapper,
  FooterCoffeeCard,
  CoffeeCardTagWrapper
} from "./styles";

interface CoffeesCardsProps {
  coffee: {
    name: string;
    categories: string[];
    description: string;
    price: number;
    imageUrl: string;
  };
}

export function CoffeeCard({ coffee }: CoffeesCardsProps) {
  const { name, categories, description, price, imageUrl } = coffee;

  const formatCoffeeValue = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL"
    }).format(price);
  };

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

        <ProductQuantityInput />

        <CartButton variant="card" aria-label="Adicionar ao carrinho" />
      </FooterCoffeeCard>
    </CoffeeCardWrapper>
  );
}
