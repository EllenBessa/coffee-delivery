import { ReactElement } from "react";

import { Bank, CreditCard, Money } from "@phosphor-icons/react";

import { PaymentMethodButtonStyling } from "./styles";

type PaymentMethod = "credit" | "debit" | "money";

interface ButtonProps {
  icon: ReactElement;
  text: string;
}

interface PaymentMethodsButtonProps {
  paymentMethod: PaymentMethod;
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod) => void;
}

const buttonVariant: Record<PaymentMethod, ButtonProps> = {
  credit: {
    icon: <CreditCard size={16} />,
    text: "Cartão de crédito"
  },

  debit: {
    icon: <Bank size={16} />,
    text: "Cartão de débito"
  },

  money: {
    icon: <Money size={16} />,
    text: "Dinheiro"
  }
};

export function PaymentMethodButton({
  paymentMethod
}: PaymentMethodsButtonProps) {
  return (
    <PaymentMethodButtonStyling type="button">
      {buttonVariant[paymentMethod].icon}
      {buttonVariant[paymentMethod].text}
    </PaymentMethodButtonStyling>
  );
}
