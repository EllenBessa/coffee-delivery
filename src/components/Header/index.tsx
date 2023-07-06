import { ShoppingCart, MapPin } from "@phosphor-icons/react";

import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="" />
      </a>

      <div>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <a href="#">
          <ShoppingCart size={22} />
        </a>
      </div>
    </HeaderContainer>
  );
}
