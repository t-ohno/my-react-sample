import React from 'react';
import styled from 'styled-components';

export const StyledTextBox = styled.input`
  min-width: 200px;
  min-height: 25px;
  font-size: 1em;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class TextBox<P extends TextBoxProps> extends React.Component<P> {
  static defaultProps = {
    type: 'text'
  };

  render() {
    return <StyledTextBox {...this.props} />;
  }
}
