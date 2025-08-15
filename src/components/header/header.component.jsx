import { HeaderContainer, Title, Nav, NavLink, Icon } from "./header.styles";
import { faCog } from "@fortawesome/free-solid-svg-icons";
const Header = () => (
  <HeaderContainer>
    <Title>Flashcards App</Title>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/card">Card</NavLink>
      <Icon icon={faCog} />
    </Nav>
  </HeaderContainer>
);

export default Header;
