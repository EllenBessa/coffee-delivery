import { AddressFormWrapper } from "./styles";

export function AddressFormInput() {
  return (
    <AddressFormWrapper action="">
      <input type="number" placeholder="CEP" />

      <input type="text" placeholder="Rua" />

      <input type="number" placeholder="Número" />

      <div>
        <input type="text" placeholder="Complemento" />
        <span>Opcional</span>
      </div>

      <input type="text" placeholder="Bairro" />

      <input type="text" placeholder="Cidade" />

      <input type="text" placeholder="UF" maxLength={2} />
    </AddressFormWrapper>
  );
}
