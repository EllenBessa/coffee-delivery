import { useState } from "react";

import expresso from "../../../../assets/expresso.png";
import { CoffeeCardWrapper } from "./styles";

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
      <span>Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div>
        <strong>
          <span>R$</span>
          9,90
        </strong>
        <form action="">
          <button type="button" onClick={handleDecreaseQuantity}>
            -
          </button>
          <input type="number" value={quantity} readOnly />
          <button type="button" onClick={handleIncreaseQuantity}>
            +
          </button>

          <button>Carrinho</button>
        </form>
      </div>
    </CoffeeCardWrapper>
  );
}
