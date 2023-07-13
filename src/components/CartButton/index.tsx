import { ComponentPropsWithRef } from "react";

import { ShoppingCart, ShoppingCartSimple } from "@phosphor-icons/react";

import { CartButtonWrapper } from "./styles";

interface CartButtonProps extends ComponentPropsWithRef<"button"> {
  variant: "header" | "card";
}

export function CartButton({ variant, ...props }: CartButtonProps) {
  return (
    <CartButtonWrapper variant={variant} {...props}>
      {variant === "header" ? (
        <ShoppingCart size={22} weight="fill" />
      ) : (
        <ShoppingCartSimple size={18} weight="fill" />
      )}

      {variant === "header" && <span>1</span>}
    </CartButtonWrapper>
  );
}
