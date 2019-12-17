import React from 'react';
import styled from 'styled-components';

export const StyledTextBox = styled.input`
  min-width: 200px;
  min-height: 25px;
  font-size: 1rem;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

export interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class TextBox extends React.Component<TextBoxProps> {
  static defaultProps = {
    type: 'text'
  };

  render() {
    return <StyledTextBox {...this.props} />;
  }
}
