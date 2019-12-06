import React from 'react';
import styled from 'styled-components';
import BaseTextBox, { BaseTextBoxProps, StyledBaseTextBox } from 'components/atoms/BaseTextBox';

export const StyledTextBox = styled(StyledBaseTextBox)`
  min-width: 200px;
  min-height: 25px;
  font-size: 1em;
`;

export interface TextBoxProps extends BaseTextBoxProps {}

export default class TextBox extends BaseTextBox<TextBoxProps> {
  render() {
    return <StyledTextBox {...this.props} />;
  }
}
