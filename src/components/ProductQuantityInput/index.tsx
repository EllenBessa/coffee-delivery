import { useState } from "react";

import { Minus, Plus } from "@phosphor-icons/react";

import { FormCoffeeCard } from "./styles";

const BUTTON_ICON_SIZE = 14;

export function ProductQuantityInput() {
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
    <FormCoffeeCard action="">
      <button
        type="button"
        onClick={handleDecreaseQuantity}
        aria-label="Diminuir quantidade"
      >
        <Minus size={BUTTON_ICON_SIZE} weight="bold" />
      </button>

      <label htmlFor="quantity">{quantity}</label>
      <input type="hidden" id="quantity" />

      <button
        type="button"
        onClick={handleIncreaseQuantity}
        aria-label="Aumentar quantidade"
      >
        <Plus size={BUTTON_ICON_SIZE} weight="bold" />
      </button>
    </FormCoffeeCard>
  );
}
