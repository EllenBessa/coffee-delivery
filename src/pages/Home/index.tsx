import { CoffeeCard } from "./components/CoffeeCard";
import { IntroAboutCoffee } from "./components/IntroAboutCoffee";

export function Home() {
  return (
    <>
      <IntroAboutCoffee />
      <CoffeeCard />
    </>
  );
}
