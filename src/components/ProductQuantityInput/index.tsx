import { useCartContext } from "@hooks/useCartContext";
import { Minus, Plus } from "@phosphor-icons/react";

import { FormCoffeeCard } from "./styles";

interface ProductQuantityInputProps {
  coffeeId: string;
  quantity: number;
  setQuantity: (cb: (quantity: number) => number) => void;
}

const BUTTON_ICON_SIZE = 14;

export function ProductQuantityInput({
  coffeeId,
  quantity,
  setQuantity
}: ProductQuantityInputProps) {
  const { changeCartItemQuantity } = useCartContext();

  function handleDecreaseQuantity() {
    if (quantity <= 1) {
      return;
    }

    setQuantity((state) => state - 1);

    changeCartItemQuantity(coffeeId, "decrease");
  }

  function handleIncreaseQuantity() {
    if (quantity >= 99) {
      return;
    }

    setQuantity((state) => state + 1);

    changeCartItemQuantity(coffeeId, "increase");
  }

  return (
    <FormCoffeeCard>
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
