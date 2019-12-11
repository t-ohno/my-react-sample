import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
  padding-left: 24px;
  height: 38px;
  line-height: 38px;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 1);

  &::before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background: transparent url('/assets/images/icons/userIcon.png') center center no-repeat;
    width: 24px;
    height: 38px;
  }
`;

export interface LoginUserNameProps {
  name: string;
}

const LoginUserName: FunctionComponent<LoginUserNameProps> = ({ name }) => <StyledSpan>{name}</StyledSpan>;

export default LoginUserName;
