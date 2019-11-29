import React from 'react';
import styled from 'styled-components';
import BaseButton, { BaseButtonProps, StyledBaseButton } from 'components/atoms/BaseButton';

export const StyledLoginButton = styled(StyledBaseButton)`
  padding: 0;
  border: none;
  background: transparent url('/assets/images/buttons/loginbutton_up.png') center center no-repeat;
  width: 99px;
  height: 38px;

  :hover {
    background-image: url('/assets/images/buttons/loginbutton_over.png');
  }
`;

interface LoginButtonProps extends BaseButtonProps {
  type: 'submit';
}

export default class LoginButton extends BaseButton<LoginButtonProps> {
  render() {
    return <StyledLoginButton {...this.props} />;
  }
}
