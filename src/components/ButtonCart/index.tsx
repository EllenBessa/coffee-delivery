import { ShoppingCart } from "@phosphor-icons/react";

import { HeaderButtonCart } from "./styles";

export function ButtonCart() {
  return (
    <HeaderButtonCart>
      <ShoppingCart size={22} weight="fill" />
      <span>1</span>
    </HeaderButtonCart>
  );
}
