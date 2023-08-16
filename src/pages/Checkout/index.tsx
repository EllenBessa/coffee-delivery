import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { MapPinLine } from "@phosphor-icons/react";

import { useCartContext } from "../../hooks/useCartContext";
import { AddressForm } from "./components/AddressForm";
import { CoffeePaymentFinalizationCard } from "./components/CoffeePaymentFinalizationCard";
import { PaymentMethod } from "./components/PaymentMethod";
import {
  AddressFormWrapper,
  CheckoutFormWrapper,
  CheckoutWrapper,
  ConfirmOrderButton,
  FinalizationOfPayment,
  FinalizationOfPaymentWrapper
} from "./styles";

const addressFormValidationSchema = z.object({
  zipCode: z.string().min(9, "Por favor, informe um CEP válido"),
  street: z.string().min(1, "Por favor, informe uma rua válida"),
  number: z.string().min(1, "Por favor, informe um número válido"),
  complement: z.string(),
  district: z.string().min(2, "Por favor, informe um bairro válido"),
  city: z.string().min(2, "Por favor, informe uma cidade válida"),
  state: z.enum(
    [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO"
    ],
    {
      errorMap: () => {
        return { message: "Inválido" };
      }
    }
  )
});

export type AddressFormFields = z.infer<typeof addressFormValidationSchema>;

export function Checkout() {
  const { cartItems } = useCartContext();

  const addressForm = useForm<AddressFormFields>({
    criteriaMode: "all",
    mode: "onBlur",
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      district: "",
      city: ""
    }
  });

  const { handleSubmit } = addressForm;

  const handleFormSubmit = (data: AddressFormFields) => {
    console.log(data);
  };

  return (
    <CheckoutWrapper>
      <CheckoutFormWrapper>
        <h1>Complete seu pedido</h1>

        <AddressFormWrapper
          onSubmit={handleSubmit(handleFormSubmit)}
          id="addressForm"
        >
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
          {cartItems.map((item) => (
            <CoffeePaymentFinalizationCard
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}

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

          <ConfirmOrderButton type="submit" form="addressForm">
            confirmar pedido
          </ConfirmOrderButton>
        </FinalizationOfPayment>
      </FinalizationOfPaymentWrapper>
    </CheckoutWrapper>
  );
}
