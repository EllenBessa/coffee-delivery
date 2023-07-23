import { MapPin } from "@phosphor-icons/react";

import ilustracao from "../../assets/ilustracao.png";
import { AddressList, SuccessWrapper } from "./styles";

export function Success() {
  return (
    <SuccessWrapper>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <AddressList>
          <li>
            <MapPin />
            <p>Entrega em Rua João Daniel Martinelli, 102</p>
            <span> Farrapos - Porto Alegre, RS</span>
          </li>
          <li>
            <MapPin />
            <p>Previsão de entrega</p>
            <span> Farrapos - Porto Alegre, RS</span>
          </li>

          <li>
            <MapPin />
            <p>Pagamento de entrega</p>
            <span> Farrapos - Porto Alegre, RS</span>
          </li>
        </AddressList>
      </div>

      <img src={ilustracao} alt="" />
    </SuccessWrapper>
  );
}
