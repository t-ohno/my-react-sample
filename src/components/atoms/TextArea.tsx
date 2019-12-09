import React from 'react';
import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  font-size: 1em;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default class TextArea extends React.Component<TextAreaProps> {
  render() {
    return <StyledTextArea {...this.props} />;
  }
}
