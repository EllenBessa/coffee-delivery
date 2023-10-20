import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCartContext } from "@hooks/useCartContext";

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

export function useCheckoutController() {
  const { cartItems, totalPrice } = useCartContext();

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

  const handleSubmit = addressForm.handleSubmit((data) => {
    console.log(data);
  });

  return {
    cartItems,
    totalPrice,
    handleSubmit,
    addressForm
  };
}
