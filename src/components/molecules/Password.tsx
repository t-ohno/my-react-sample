import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import TextBox, { TextBoxProps } from 'components/atoms/TextBox';

const StyledLable = styled.label`
  display: inline-block;
  height: 30px;

  span {
    display: inline-block;
    min-width: 120px;
    line-height: 30px;

    :first-child {
      position: relative;
      padding: 0 10px 0 30px;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        background: transparent url('/assets/images/icons/passwordIcon.png') center left no-repeat;
        width: 30px;
        height: 30px;
      }
    }

    :last-child {
      padding-left: 5px;
    }
  }
`;

interface PasswordProps extends TextBoxProps {
  label: string;
}

const Password: FunctionComponent<PasswordProps> = ({ label }) => (
  <StyledLable>
    <span>{label}</span>
    <TextBox type="password" name="password" required />
    <span>*</span>
  </StyledLable>
);

export default Password;
