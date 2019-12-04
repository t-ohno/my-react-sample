import React from 'react';
import styled from 'styled-components';
import BaseTextArea, { BaseTextAreaProps, StyledBaseTextArea } from 'components/atoms/BaseTextArea';

export const StyledTextArea = styled(StyledBaseTextArea)`
  font-size: 1em;
`;

export interface TextAreaProps extends BaseTextAreaProps {}

export default class TextArea extends BaseTextArea<TextAreaProps> {
  render() {
    return <StyledTextArea {...this.props} />;
  }
}
