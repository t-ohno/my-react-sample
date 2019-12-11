import React from 'react';
import styled from 'styled-components';

export const StyledNumber = styled.input`
  min-width: 200px;
  min-height: 25px;
  font-size: 1rem;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface NumberProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class Number extends React.Component<NumberProps> {
  static defaultProps = {
    type: 'number'
  };

  render() {
    return <StyledNumber {...this.props} />;
  }
}
