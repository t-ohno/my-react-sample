import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props as BaseProps, BaseStyledButton } from './Button';

export const StyledLoginButton = styled(BaseStyledButton).attrs({
  type: 'submit'
})`
  padding: 0;
  border: none;
  background: transparent url('/assets/images/buttons/loginbutton_up.png') center center no-repeat;
  width: 99px;
  height: 38px;

  :hover {
    background-image: url('/assets/images/buttons/loginbutton_over.png');
  }
`;

interface Props extends BaseProps {}

const LoginButton: FunctionComponent<Props> = () => <StyledLoginButton />;

export default LoginButton;
