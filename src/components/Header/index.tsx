import { MapPin } from "@phosphor-icons/react";

import { CartButton } from "../CartButton";

import logo from "../../assets/logo.png";
import { HeaderContainer } from "./styles";

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
        <CartButton />
      </div>
    </HeaderContainer>
  );
}
