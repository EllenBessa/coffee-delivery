import { CoffeeCard } from "./components/CoffeeCard";
import { IntroAboutCoffee } from "./components/IntroAboutCoffee";

import { CardListsWrapper, CoffeesSection } from "./styles";

import coffeesMocks from "../../mocks/coffees.json";
import { useState } from "react";

interface Coffee {
  id: string;
  name: string;
  categories: string[];
  description: string;
  price: number;
  imageUrl: string;
}

export function Home() {
  const [coffees] = useState<Coffee[]>(coffeesMocks);

  return (
    <>
      <IntroAboutCoffee />

      <CoffeesSection>
        <h2>Nossos Cafés</h2>
        <CardListsWrapper>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </CardListsWrapper>
      </CoffeesSection>
    </>
  );
}
