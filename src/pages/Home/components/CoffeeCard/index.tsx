import { CartButton } from "../../../../components/CartButton";
import { InputNumber } from "../../../../components/InputNumber";

import {
  CoffeeCardWrapper,
  FooterCoffeeCard,
  CoffeeCardTagWrapper
} from "./styles";

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
  const { name, tags, description, price, imageUrl } = coffee;

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

        <InputNumber />

        <CartButton variant="card" aria-label="Adicionar ao carrinho" />
      </FooterCoffeeCard>
    </CoffeeCardWrapper>
  );
}
