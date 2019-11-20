import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {
  Props as ButtonProps,
  StyledButton as BaseStyledButton
} from "./Button";

export const StyledLogoutButton = styled(BaseStyledButton)`
  background: transparent url("/assets/images/buttons/logoutbutton_up.png")
    center center no-repeat;
  border: none;
  width: 122px;
  height: 38px;

  :hover {
    background-image: url("/assets/images/buttons/logoutbutton_over.png");
  }
`;

interface Props extends ButtonProps {}

const LogoutButton: FunctionComponent<Props> = () => <StyledLogoutButton />;

export default LogoutButton;
