import React from 'react';
import styled from 'styled-components';

export const StyledLogoutButton = styled.button`
  padding: 0;
  border: none;
  background: transparent url('/assets/images/buttons/logoutbutton_up.png') center center no-repeat;
  width: 122px;
  height: 38px;

  :hover {
    background-image: url('/assets/images/buttons/logoutbutton_over.png');
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

export interface LogoutButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default class LogoutButton extends React.Component<LogoutButtonProps> {
  static defaultProps = {
    type: 'button'
  };

  render() {
    return <StyledLogoutButton {...this.props} />;
  }
}
