import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const BaseStyledButton = styled.button`
  margin: 0;
  padding: 0 10px;
  background: linear-gradient(
    rgba(245, 245, 245, 1),
    rgba(230, 230, 230, 1),
    rgba(200, 200, 200, 1)
  );
  border: 1px solid rgba(151, 151, 151, 1);
  border-radius: 4px;
  min-width: 24px;
  min-height: 24px;
  font-size: 1em;
  text-align: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
`;

const StyledButton = styled(BaseStyledButton).attrs({ type: "button" })``;

export interface Props {
  value?: string;
  text?: string;
  onClick?: () => void;
}

const Button: FunctionComponent<Props> = ({ value, text, onClick }) => (
  <StyledButton value={value} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
