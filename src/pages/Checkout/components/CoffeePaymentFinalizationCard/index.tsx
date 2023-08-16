import { useState } from "react";

import { ProductQuantityInput } from "@components/ProductQuantityInput";
import { Trash } from "@phosphor-icons/react";

import { formatPrice } from "../../../../helpers/formatPrice";
import { FinalizationCard, RemoveButton } from "./styles";

interface CoffeePaymentFinalizationCardProps {
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
}

export function CoffeePaymentFinalizationCard({
  imageUrl,
  name,
  price,
  ...props
}: CoffeePaymentFinalizationCardProps) {
  const [quantity, setQuantity] = useState(props.quantity);

  return (
    <FinalizationCard>
      <div>
        <img src={imageUrl} alt="" />

        <div>
          <span>{name}</span>
          <div>
            <ProductQuantityInput
              quantity={quantity}
              setQuantity={setQuantity}
            />

            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </div>
      </div>
      <strong>R$ {formatPrice(price)}</strong>
    </FinalizationCard>
  );
}
