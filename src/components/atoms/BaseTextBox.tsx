import React from 'react';
import styled from 'styled-components';

export const StyledBaseTextBox = styled.input``;

export interface BaseTextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default abstract class BaseTextBox<T extends BaseTextBoxProps> extends React.Component<T> {
  render() {
    return <StyledBaseTextBox type="text" {...this.props} />;
  }
}
