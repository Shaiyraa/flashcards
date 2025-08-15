import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px 0;

  width: 100%;
  font-size: 14px;
  z-index: 1000;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  p {
    margin: 0;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
