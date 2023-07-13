import { useState } from "react";

import { Minus, Plus } from "@phosphor-icons/react";

import expresso from "../../../../assets/expresso.png";
import {
  CoffeeCardWrapper,
  FormCoffeeCard,
  FooterCoffeeCard,
  CoffeeCardTagWrapper
} from "./styles";
import { CartButton } from "../../../../components/CartButton";

export function CoffeeCard() {
  const [quantity, setQuantity] = useState(1);

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
      <img src={expresso} alt="" />
      <CoffeeCardTagWrapper>
        <span>Tradicional</span>
        <span>Tradicional</span>
        <span>Tradicional</span>
      </CoffeeCardTagWrapper>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <FooterCoffeeCard>
        <span>
          R$
          <strong> 9,90</strong>
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
