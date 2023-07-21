import { Link } from "react-router-dom";

import { MapPin } from "@phosphor-icons/react";

import { CartButton } from "../CartButton";

import logo from "@assets/logo.png";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/" aria-label="Navegar para página inicial">
        <img src={logo} alt="" />
      </Link>

      <div>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <Link to="/checkout">
          <CartButton variant="header" />
        </Link>
      </div>
    </HeaderContainer>
  );
}
