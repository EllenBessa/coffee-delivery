import { useState } from "react";

import { ProductQuantityInput } from "@components/ProductQuantityInput";
import { formatPrice } from "@helpers/formatPrice";
import { Trash } from "@phosphor-icons/react";

import { FinalizationCard, RemoveButton } from "./styles";

interface CoffeePaymentFinalizationCardProps {
  coffeeId: string;
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
  onDeleteCoffee: (id: string) => void;
}

export function CoffeePaymentFinalizationCard({
  coffeeId,
  imageUrl,
  name,
  price,
  quantity: defaultQuantity,
  onDeleteCoffee,
}: CoffeePaymentFinalizationCardProps) {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const totalPrice = formatPrice(quantity * price);

  return (
    <FinalizationCard>
      <div>
        <img src={imageUrl} alt="" />

        <div>
          <span>{name}</span>
          <div>
            <ProductQuantityInput
              coffeeId={coffeeId}
              quantity={quantity}
              setQuantity={setQuantity}
            />

            <RemoveButton onClick={() => onDeleteCoffee(coffeeId)}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </div>
      </div>
      <strong>R$ {totalPrice}</strong>
    </FinalizationCard>
  );
}
