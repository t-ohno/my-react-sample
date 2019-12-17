import React from 'react';
import styled from 'styled-components';
import ImageButton, { ImageButtonProps, StyledImageButton } from 'components/atoms/ImageButton';

export const StyledLogoutButton = styled(StyledImageButton)`
  background-image: url('/assets/images/buttons/logoutbutton_up.png');
  width: 122px;
  height: 38px;

  :hover {
    background-image: url('/assets/images/buttons/logoutbutton_over.png');
  }

  &[aria-disabled='true'],
  &:disabled {
    &:hover {
      background-image: url('/assets/images/buttons/logoutbutton_up.png');
    }
  }
`;

export interface LogoutButtonProps extends ImageButtonProps {}

export default class LogoutButton extends ImageButton<LogoutButtonProps> {
  static defaultProps = {
    type: 'button'
  };

  render() {
    return <StyledLogoutButton {...this.props} />;
  }
}
