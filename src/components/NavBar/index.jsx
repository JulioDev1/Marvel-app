import {
  ButtonQuantity,
  IconButton,
  Input,
  LogoMarvel,
  NavBarContainer,
  Quantity,
  SearchInput,
} from "./styled";
import Logo from "../../icon/Marvel-Comics-logo.png";
import { Search } from "../../icon/Search";
import { Cart } from "../../icon/Cart";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
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
        <div>
          <Link to="/shopping">
            <Cart />
            <ButtonQuantity>
              <Quantity>1</Quantity>
            </ButtonQuantity>
          </Link>
        </div>
      </NavBarContainer>
    </div>
  );
};
