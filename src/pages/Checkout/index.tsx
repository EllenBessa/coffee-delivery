import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";

import { AddressFormInput } from "./components/AddressFormInput";
import { CoffeePaymentFinalizationCard } from "./components/CoffeePaymentFinalizationCard";
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

type FormProps = z.infer<typeof addressFormValidationSchema>;

export function Checkout() {
  const validationFormProvider = useForm<FormProps>({
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

  const { handleSubmit } = validationFormProvider;

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  return (
    <CheckoutWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <FormProvider {...validationFormProvider}>
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
      </FormProvider>
    </CheckoutWrapper>
  );
}
