import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Props as BaseProps, BaseStyledButton } from "./Button";

export const StyledLogoutButton = styled(BaseStyledButton).attrs({
  type: "button"
})`
  padding: 0;
  border: none;
  background: transparent url("/assets/images/buttons/logoutbutton_up.png")
    center center no-repeat;
  width: 122px;
  height: 38px;

  :hover {
    background-image: url("/assets/images/buttons/logoutbutton_over.png");
  }
`;

interface Props extends BaseProps {}

const LogoutButton: FunctionComponent<Props> = () => <StyledLogoutButton />;

export default LogoutButton;
