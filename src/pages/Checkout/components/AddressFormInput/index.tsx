import { Input } from "@components/Input";

import { AddressFormWrapper } from "./styles";

export function AddressFormInput() {
  return (
    <AddressFormWrapper action="">
      <Input type="number" placeholder="CEP" />

      <Input type="text" placeholder="Rua" />

      <Input type="number" placeholder="Número" />

      <div>
        <Input type="text" placeholder="Complemento" />
        <span>Opcional</span>
      </div>

      <Input type="text" placeholder="Bairro" />

      <Input type="text" placeholder="Cidade" />

      <Input type="text" placeholder="UF" maxLength={2} />
    </AddressFormWrapper>
  );
}
