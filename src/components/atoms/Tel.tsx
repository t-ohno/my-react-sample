import React from 'react';
import styled from 'styled-components';

export const StyledTel = styled.input`
  min-width: 200px;
  min-height: 25px;
  font-size: 1rem;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface TelProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class Tel extends React.Component<TelProps> {
  static defaultProps = {
    type: 'tel',
    pattern: '\\d{1,5}-\\d{1,4}-\\d{4,5}',
    placeholder: '00-0000-0000'
  };

  render() {
    return <StyledTel {...this.props} />;
  }
}
