import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";

import { PaymentMethodButton } from "./components/PaymentMethodButton";

import {
  AddressForm,
  CheckoutFormWrapper,
  CheckoutWrapper,
  ConfirmOrderButton,
  FinalizationOfPayment,
  FinalizationOfPaymentWrapper,
  PaymentMethodWrapper
} from "./styles";

import { AddressFormInput } from "./components/AddressFormInput";
import { CoffeePaymentFinalizationCard } from "./components/CoffeePaymentFinalizationCard";

export function Checkout() {
  return (
    <CheckoutWrapper>
      <CheckoutFormWrapper>
        <h1>Complete seu pedido</h1>
        <AddressForm>
          <div>
            <MapPinLine size={22} />

            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <AddressFormInput />
        </AddressForm>

        <PaymentMethodWrapper>
          <div>
            <CurrencyDollar size={22} />

            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div>
            <PaymentMethodButton paymentMethod="credit" />
            <PaymentMethodButton paymentMethod="debit" />
            <PaymentMethodButton paymentMethod="money" />
          </div>
        </PaymentMethodWrapper>
      </CheckoutFormWrapper>

      <FinalizationOfPaymentWrapper>
        <h2>Cafés selecionados</h2>
        <FinalizationOfPayment>
          <CoffeePaymentFinalizationCard />
          <CoffeePaymentFinalizationCard />

          <ul>
            <li>
              Total de itens
              <span>R$ 29,70</span>
            </li>
            <li>
              Entrega
              <span>R$ 3,50</span>
            </li>
            <li>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </li>
          </ul>

          <ConfirmOrderButton type="button">
            confirmar pedido
          </ConfirmOrderButton>
        </FinalizationOfPayment>
      </FinalizationOfPaymentWrapper>
    </CheckoutWrapper>
  );
}
