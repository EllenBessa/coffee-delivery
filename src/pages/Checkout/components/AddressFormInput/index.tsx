import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "@components/Input";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddressFormWrapper } from "./styles";

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

export function AddressFormInput() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
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

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  return (
    <AddressFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        type="text"
        placeholder="CEP"
        minLength={9}
        error={errors.zipCode?.message}
        {...register("zipCode")}
      />

      <Input
        type="text"
        placeholder="Rua"
        minLength={1}
        error={errors.street?.message}
        {...register("street")}
      />

      <Input
        type="string"
        placeholder="Número"
        minLength={1}
        error={errors.number?.message}
        {...register("number")}
      />

      <div>
        <Input
          type="text"
          placeholder="Complemento"
          error={errors.complement?.message}
          {...register("complement")}
        />
        <span>Opcional</span>
      </div>

      <Input
        type="text"
        placeholder="Bairro"
        minLength={1}
        error={errors.district?.message}
        {...register("district")}
      />

      <Input
        type="text"
        placeholder="Cidade"
        minLength={2}
        error={errors.city?.message}
        {...register("city")}
      />

      <Input
        type="text"
        placeholder="UF"
        maxLength={2}
        error={errors.state?.message}
        {...register("state", { setValueAs: (value) => value.toUpperCase() })}
      />
    </AddressFormWrapper>
  );
}
