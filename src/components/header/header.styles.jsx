import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e7d90ff;
  color: white;
  padding: 0 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  color: white;
  height: 3rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;

  text-decoration: none;
  &:hover {
    background-color: #185362ff;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: white;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #185362ff;
  }
`;
