import { ComponentPropsWithRef } from "react";

import { ShoppingCart, ShoppingCartSimple } from "@phosphor-icons/react";

import { useCartContext } from "../../hooks/useCartContext";
import { CartButtonWrapper } from "./styles";

interface CartButtonProps extends ComponentPropsWithRef<"button"> {
  variant: "header" | "card";
}

export function CartButton({ variant, ...props }: CartButtonProps) {
  const { itemsCount } = useCartContext();

  return (
    <CartButtonWrapper variant={variant} {...props}>
      {variant === "header" ? (
        <ShoppingCart size={22} weight="fill" />
      ) : (
        <ShoppingCartSimple size={18} weight="fill" />
      )}

      {variant === "header" && <span>{itemsCount}</span>}
    </CartButtonWrapper>
  );
}
