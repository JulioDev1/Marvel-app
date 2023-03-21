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
export const NavBar = () => {
  return (
    <div>
      <NavBarContainer>
        <LogoMarvel src={Logo} alt="Logo" />
        <SearchInput>
          <Input placeholder="Search for HQ's" />
          <IconButton>
            <Search />
          </IconButton>
        </SearchInput>
        <div>
          <Cart />
          <ButtonQuantity>
            <Quantity>1</Quantity>
          </ButtonQuantity>
        </div>
      </NavBarContainer>
    </div>
  );
};
