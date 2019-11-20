import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {
  Props as ButtonProps,
  StyledButton as BaseStyledButton
} from "./Button";

export const StyledLoginButton = styled(BaseStyledButton)`
  background: transparent url("/assets/images/buttons/loginbutton_up.png")
    center center no-repeat;
  width: 99px;
  height: 38px;

  :hover {
    background-image: url("/assets/images/buttons/loginbutton_over.png");
  }
`;

interface Props extends ButtonProps {}

const LoginButton: FunctionComponent<Props> = ({ type = "submit" }) => (
  <StyledLoginButton type={type} />
);

export default LoginButton;
