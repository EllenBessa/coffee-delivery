import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import introCoffee from "../../../../assets/introCoffee.png";
import { IconBackground, IntroWrapper, TitleWrapper, Topics } from "./styles";

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
          <div>
            <IconBackground iconBackground="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </IconBackground>
            <span>Compra simples e segura</span>
          </div>

          <div>
            <IconBackground iconBackground="base-text">
              <Package size={16} weight="fill" />
            </IconBackground>
            <span>Embalagem mantém o café intacto</span>
          </div>

          <div>
            <IconBackground iconBackground="yellow">
              <Timer size={16} weight="fill" />
            </IconBackground>
            <span>Entrega rápida e rastreada</span>
          </div>

          <div>
            <IconBackground iconBackground="purple">
              <Coffee size={16} weight="fill" />
            </IconBackground>
            <span>O café chega fresquinho até você</span>
          </div>
        </Topics>
      </div>
      <img src={introCoffee} alt="" />
    </IntroWrapper>
  );
}
