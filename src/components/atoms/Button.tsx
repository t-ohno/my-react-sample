import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  border-style: none;
  background-color: #248;
  min-width: 30px;
  min-height: 30px;
  font-size: 1.4em;
  cursor: pointer;
`;

export interface Props {
  type?: "submit" | "reset" | "button";
  value?: string;
  text?: string;
}

const Button: FunctionComponent<Props> = ({ type = "button", value, text }) => (
  <StyledButton type={type} value={value}>
    {text}
  </StyledButton>
);

export default Button;
