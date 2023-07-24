import { MapPin, Timer } from "@phosphor-icons/react";

import ilustracao from "../../assets/ilustracao.png";
import { AddressList, IconBackground, SuccessWrapper } from "./styles";

export function Success() {
  return (
    <SuccessWrapper>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <AddressList>
          <li>
            <IconBackground>
              <MapPin size={16} weight="fill" />
            </IconBackground>

            <p>
              Entrega em <b> Rua João Daniel Martinelli, 102 </b>
            </p>
            <span> Farrapos - Porto Alegre, RS</span>
          </li>

          <li>
            <IconBackground>
              <Timer size={16} weight="fill" />
            </IconBackground>

            <p>Previsão de entrega</p>
            <strong> 20min - 30min</strong>
          </li>

          <li>
            <IconBackground>
              <MapPin size={16} weight="fill" />
            </IconBackground>

            <p>Pagamento na entrega</p>
            <strong>Cartão de crédito</strong>
          </li>
        </AddressList>
      </div>

      <img src={ilustracao} alt="" />
    </SuccessWrapper>
  );
}
