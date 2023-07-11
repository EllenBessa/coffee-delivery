import { ReactElement } from "react";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import { IconBackground, IntroWrapper, TitleWrapper, Topics } from "./styles";

import introCoffee from "../../../../assets/introCoffee.png";

interface Topic {
  icon: ReactElement;
  iconBackground: "yellow-dark" | "base-text" | "purple" | "yellow";
  text: string;
}

const DEFAULT_ICON_SIZE = 16;

const topics: Topic[] = [
  {
    icon: <ShoppingCart size={DEFAULT_ICON_SIZE} weight="fill" />,
    iconBackground: "yellow-dark",
    text: "Compra simples e segura"
  },
  {
    icon: <Package size={DEFAULT_ICON_SIZE} weight="fill" />,
    iconBackground: "base-text",
    text: "Embalagem mantém o café intacto"
  },
  {
    icon: <Timer size={DEFAULT_ICON_SIZE} weight="fill" />,
    iconBackground: "yellow",
    text: "Entrega rápida e rastreada"
  },
  {
    icon: <Coffee size={DEFAULT_ICON_SIZE} weight="fill" />,
    iconBackground: "purple",
    text: "O café chega fresquinho até você"
  }
];

export function IntroAboutCoffee() {
  return (
    <IntroWrapper>
      <div>
        <TitleWrapper>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
        </TitleWrapper>

        <Topics>
          {topics.map((topic) => (
            <div key={topic.text}>
              <IconBackground background={topic.iconBackground}>
                {topic.icon}
              </IconBackground>
              <span>{topic.text}</span>
            </div>
          ))}
        </Topics>
      </div>
      <img src={introCoffee} alt="" />
    </IntroWrapper>
  );
}
