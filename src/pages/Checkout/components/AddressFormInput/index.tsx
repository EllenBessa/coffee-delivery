import { useFormContext } from "react-hook-form";

import { Input } from "@components/Input";
import { AddressFormFields } from "@pages/Checkout";

import { AddressFormWrapper } from "./styles";

export function AddressFormInput() {
  const {
    register,
    formState: { errors }
  } = useFormContext<AddressFormFields>();

  return (
    <AddressFormWrapper>
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
