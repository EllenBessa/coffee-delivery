import { FormProvider } from "react-hook-form";

import { MapPinLine } from "@phosphor-icons/react";

import { AddressForm } from "./components/AddressForm";
import { CoffeePaymentFinalizationCard } from "./components/CoffeePaymentFinalizationCard";
import { PaymentMethod } from "./components/PaymentMethod";
import {
  AddressFormWrapper,
  CheckoutFormWrapper,
  CheckoutWrapper,
  ConfirmOrderButton,
  FinalizationOfPayment,
  FinalizationOfPaymentWrapper,
} from "./styles";
import { useCheckoutController } from "./useCheckoutController";

export function Checkout() {
  const {
    cartItems,
    totalPrice,
    handleSubmit,
    addressForm,
    handleDeleteCoffee,
  } = useCheckoutController();

  return (
    <CheckoutWrapper>
      <CheckoutFormWrapper>
        <h1>Complete seu pedido</h1>

        <AddressFormWrapper onSubmit={handleSubmit} id="addressForm">
          <div>
            <MapPinLine size={22} />

            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
        </AddressFormWrapper>

        <PaymentMethod />
      </CheckoutFormWrapper>

      <FinalizationOfPaymentWrapper>
        <h2>Cafés selecionados</h2>
        <FinalizationOfPayment>
          {cartItems.length === 0
            ? "Você não adicionou nenhum item ao carrinho"
            : cartItems.map((item) => (
                <CoffeePaymentFinalizationCard
                  key={item.id}
                  coffeeId={item.id}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onDeleteCoffee={handleDeleteCoffee}
                />
              ))}

          <ul>
            <li>
              Total de itens
              <span>R$ {totalPrice}</span>
            </li>
            <li>
              Entrega
              <span>R$ 3,50</span>
            </li>
            <li>
              <strong>Total</strong>
              <strong>R$ {totalPrice + 3.5}</strong>
            </li>
          </ul>

          <ConfirmOrderButton type="submit" form="addressForm">
            confirmar pedido
          </ConfirmOrderButton>
        </FinalizationOfPayment>
      </FinalizationOfPaymentWrapper>
    </CheckoutWrapper>
  );
}
