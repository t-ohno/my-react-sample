import React from 'react';
import styled from 'styled-components';
import BaseButton, { BaseButtonProps, StyledBaseButton } from 'components/atoms/BaseButton';

export const StyledLogoutButton = styled(StyledBaseButton)`
  padding: 0;
  border: none;
  background: transparent url('/assets/images/buttons/logoutbutton_up.png') center center no-repeat;
  width: 122px;
  height: 38px;

  :hover {
    background-image: url('/assets/images/buttons/logoutbutton_over.png');
  }
`;

export interface LogoutButtonProps extends BaseButtonProps {}

export default class LogoutButton extends BaseButton<LogoutButtonProps> {
  render() {
    return <StyledLogoutButton {...this.props} />;
  }
}
