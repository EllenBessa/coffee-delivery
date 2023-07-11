import { ShoppingCart } from "@phosphor-icons/react";

import { HeaderCartButton } from "./styles";

export function CartButton() {
  return (
    <HeaderCartButton>
      <ShoppingCart size={22} weight="fill" />
      <span>1</span>
    </HeaderCartButton>
  );
}
