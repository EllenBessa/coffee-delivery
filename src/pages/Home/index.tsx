import { CoffeeCard } from "./components/CoffeeCard";
import { IntroAboutCoffee } from "./components/IntroAboutCoffee";

import { CardListsWrapper, CoffeesSection } from "./styles";

export function Home() {
  return (
    <>
      <IntroAboutCoffee />

      <CoffeesSection>
        <h2>Nossos Cafés</h2>
        <CardListsWrapper>
          {Array.from(Array(12)).map((_, index) => (
            <CoffeeCard key={index} />
          ))}
        </CardListsWrapper>
      </CoffeesSection>
    </>
  );
}
