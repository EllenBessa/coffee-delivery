import { CurrencyDollar } from "@phosphor-icons/react";

import { PaymentMethodButton } from "../PaymentMethodButton";
import { PaymentMethodWrapper } from "./styles";

export function PaymentMethod() {
  return (
    <PaymentMethodWrapper>
      <div>
        <CurrencyDollar size={22} />

        <span>Pagamento</span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>

      <div>
        <PaymentMethodButton paymentMethod="credit" />
        <PaymentMethodButton paymentMethod="debit" />
        <PaymentMethodButton paymentMethod="money" />
      </div>
    </PaymentMethodWrapper>
  );
}
