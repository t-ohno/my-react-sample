import React from 'react';
import styled from 'styled-components';

export const StyledBaseTextArea = styled.textarea`
  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface BaseTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default abstract class BaseTextArea<T extends BaseTextAreaProps> extends React.Component<T> {
  render() {
    return <StyledBaseTextArea {...this.props} />;
  }
}
