import { CoffeeCard } from "./components/CoffeeCard";
import { IntroAboutCoffee } from "./components/IntroAboutCoffee";
import { CardListsWrapper, CoffeesSection } from "./styles";
import { useHomeController } from "./useHomeController";

export function Home() {
  const { coffees } = useHomeController();

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
