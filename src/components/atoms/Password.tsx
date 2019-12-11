import React from 'react';
import styled from 'styled-components';

export const StyledPassword = styled.input`
  min-width: 200px;
  min-height: 25px;
  font-size: 1rem;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class Password extends React.Component<PasswordProps> {
  static defaultProps = {
    type: 'password'
  };

  render() {
    return <StyledPassword {...this.props} />;
  }
}
