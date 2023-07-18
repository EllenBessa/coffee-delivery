import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";

import { PaymentMethodButton } from "./components/PaymentMethodButton";
import cafe from "../../assets/expresso.png";

import {
  AddressForm,
  CheckoutFormWrapper,
  CheckoutWrapper,
  FinalizationOfPayment,
  FinalizationOfPaymentWrapper,
  PaymentMethodWrapper
} from "./styles";
import { InputNumber } from "../../components/InputNumber";

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

          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
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
          <div>
            <img src={cafe} alt="" />
            <div>
              <span>Expresso Tradicional</span>
              <InputNumber />
              <button>remover</button>
            </div>
          </div>

          <ul>
            <li>
              Total de itens
              <span>R$ 29,70</span>
            </li>
            <li>
              Total de itens
              <span>R$ 29,70</span>
            </li>
            <li>
              <strong>Total de itens</strong>
              <strong>R$ 29,70</strong>
            </li>
          </ul>

          <button>confirmar pedido</button>
        </FinalizationOfPayment>
      </FinalizationOfPaymentWrapper>
    </CheckoutWrapper>
  );
}
