import React from 'react';
import styled from 'styled-components';
import Password, { PasswordProps } from 'components/atoms/Password';

const StyledLoginPassword = styled.label`
  display: inline-block;
  height: 25px;

  span {
    display: inline-block;
    min-width: 120px;
    line-height: 25px;
    color: rgba(102, 102, 102, 1);

    :first-child {
      position: relative;
      padding: 0 10px 0 30px;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        background: transparent url('/assets/images/icons/passwordIcon.png') center left no-repeat;
        width: 25px;
        height: 25px;
      }
    }

    :last-child {
      padding-left: 5px;
    }
  }
`;

interface Props extends PasswordProps {
  label: string;
}

const LoginPassword: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <StyledLoginPassword>
      <span>{props.label}</span>
      <Password {...props} />
      {props.required && <span>*</span>}
    </StyledLoginPassword>
  );
};

LoginPassword.defaultProps = {
  name: 'password',
  placeholder: 'password'
};

export default LoginPassword;
