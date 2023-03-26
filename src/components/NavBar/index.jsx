import {
  CartIcon,
  IconButton,
  IconQuantity,
  Input,
  LogoMarvel,
  NavBarContainer,
  SearchInput,
} from "./styled";
import Logo from "../../icon/Marvel-Comics-logo.png";
import { Search } from "../../icon/Search";
import { Cart } from "../../icon/Cart";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">
        <LogoMarvel src={Logo} alt="Logo" />
      </Link>
      <SearchInput>
        <Input placeholder="Search for HQ's" />
        <IconButton>
          <Search />
        </IconButton>
      </SearchInput>
      <CartIcon>
        <Link to="/shopping">
          <Cart />
        </Link>
        <IconQuantity>1</IconQuantity>
      </CartIcon>
    </NavBarContainer>
  );
};
