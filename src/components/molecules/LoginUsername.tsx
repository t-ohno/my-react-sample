import React from 'react';
import styled from 'styled-components';
import TextBox, { TextBoxProps } from 'components/atoms/TextBox';

export const StyledUsername = styled.label`
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
        background: transparent url('/assets/images/icons/userIdIcon.png') center left no-repeat;
        width: 25px;
        height: 25px;
      }
    }

    :last-child {
      padding-left: 5px;
    }
  }
`;

interface Props extends TextBoxProps {
  label: string;
}

const LoginUsername: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <StyledUsername>
      <span>{props.label}</span>
      <TextBox {...props} />
      {props.required && <span>*</span>}
    </StyledUsername>
  );
};

LoginUsername.defaultProps = {
  name: 'username',
  placeholder: 'username'
};

export default LoginUsername;
