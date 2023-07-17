import { useState } from "react";

import { Minus, Plus } from "@phosphor-icons/react";

import { FormCoffeeCard } from "../../components/InputNumber/styles";

export function InputNumber() {
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
        <Minus size={14} weight="bold" />
      </button>

      <label htmlFor="">{quantity}</label>
      <input type="hidden" />

      <button
        type="button"
        onClick={handleIncreaseQuantity}
        aria-label="Aumentar quantidade"
      >
        <Plus size={14} weight="bold" />
      </button>
    </FormCoffeeCard>
  );
}
