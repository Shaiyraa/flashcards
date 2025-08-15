import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin: 40px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  width: 800px;
  height: 500px;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

export const CardTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 1.5;
`;

export const CardAnswer = styled.p`
  font-size: 24px;
  color: #666;
  text-align: center;
  line-height: 1.5;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border-top: 1px solid #ccc;
  background-color: #f1f1f1;
  position: absolute;
  bottom: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  padding: 25px 0;
  font-size: 38px;
  color: ${({ color }) => (color === "red" ? "#e74c3c" : "#2ecc71")};
  cursor: pointer;

  &:hover {
    color: ${({ color }) =>
      color === "red" ? "rgba(115, 51, 43, 1)" : "#266a42ff"};
    background-color: ${({ color }) =>
      color === "red" ? "rgba(255, 0, 0, 0.1)" : "rgba(0, 255, 0, 0.1)"};
  }
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
`;
