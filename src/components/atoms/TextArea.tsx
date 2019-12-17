import React from 'react';
import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  border-color: rgba(151, 151, 151, 1);
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

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default class TextArea extends React.Component<TextAreaProps> {
  render() {
    return <StyledTextArea {...this.props} />;
  }
}
