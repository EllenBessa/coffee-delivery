import { AddressFormWrapper } from "./styles";

export function AddressFormInput() {
  return (
    <AddressFormWrapper action="">
      <input type="number" placeholder="CEP" className="cep" />

      <input type="text" placeholder="Rua" className="street" />

      <input type="number" placeholder="Número" />

      <input type="text" placeholder="Complemento" className="complement" />

      <input type="text" placeholder="Bairro" />

      <input type="text" placeholder="Cidade" />

      <input type="text" placeholder="UF" maxLength={2} />
    </AddressFormWrapper>
  );
}
