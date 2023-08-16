import coffeesMocks from "../../mocks/coffees.json";
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
          {coffeesMocks.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </CardListsWrapper>
      </CoffeesSection>
    </>
  );
}
