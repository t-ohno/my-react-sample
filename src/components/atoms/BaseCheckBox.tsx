import React from 'react';
import styled from 'styled-components';

export const StyledBaseCheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  &:hover {
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;

    &:hover {
      cursor: default;
    }
  }
`;

export interface BaseCheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default abstract class BaseCheckBox<T extends BaseCheckBoxProps> extends React.Component<T> {
  render() {
    return <StyledBaseCheckBox checked={this.props.checked} disabled={this.props.disabled} />;
  }
}
