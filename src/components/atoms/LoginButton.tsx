import React from 'react';
import styled from 'styled-components';

export const StyledLoginButton = styled.button`
  padding: 0;
  border: none;
  background: transparent url('/assets/images/buttons/loginbutton_up.png') center center no-repeat;
  width: 99px;
  height: 38px;

  :hover {
    background-image: url('/assets/images/buttons/loginbutton_over.png');
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;

    &:hover {
      cursor: default;
    }
  }
`;

export interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default class LoginButton extends React.Component<LoginButtonProps> {
  static defaultProps = {
    type: 'submit'
  };

  render() {
    return <StyledLoginButton {...this.props} />;
  }
}
