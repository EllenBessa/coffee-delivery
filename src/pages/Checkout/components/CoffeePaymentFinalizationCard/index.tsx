import { Trash } from "@phosphor-icons/react";

import { InputNumber } from "@components/InputNumber";

import cafe from "@assets/expresso.png";

import { FinalizationCard, RemoveButton } from "./styles";

export function CoffeePaymentFinalizationCard() {
  return (
    <FinalizationCard>
      <img src={cafe} alt="" />
      <div>
        <span>Expresso Tradicional</span>

        <div>
          <InputNumber />

          <RemoveButton>
            <Trash size={16} />
            Remover
          </RemoveButton>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </FinalizationCard>
  );
}
