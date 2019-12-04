import React from 'react';
import styled from 'styled-components';

export const StyledBaseInput = styled.input`
  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default abstract class BaseInput<T extends BaseInputProps> extends React.Component<T> {
  render() {
    return <StyledBaseInput {...this.props} />;
  }
}
