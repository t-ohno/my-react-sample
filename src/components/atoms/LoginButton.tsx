import React from 'react';
import styled from 'styled-components';
import ImageButton, { ImageButtonProps, StyledImageButton } from 'components/atoms/ImageButton';

export const StyledLoginButton = styled(StyledImageButton)`
  background-image: url('/assets/images/buttons/loginbutton_up.png');
  width: 99px;
  height: 38px;

  :hover {
    background-image: url('/assets/images/buttons/loginbutton_over.png');
  }

  &[aria-disabled='true'],
  &:disabled {
    &:hover {
      background-image: url('/assets/images/buttons/loginbutton_up.png');
    }
  }
`;

export interface LoginButtonProps extends ImageButtonProps {}

export default class LoginButton extends ImageButton<LoginButtonProps> {
  static defaultProps = {
    type: 'submit'
  };

  render() {
    return <StyledLoginButton {...this.props} />;
  }
}
