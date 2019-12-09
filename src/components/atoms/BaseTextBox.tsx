import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseTextBox = styled(StyledBaseInput)``;

export interface BaseTextBoxProps extends BaseInputProps {}

export default abstract class BaseTextBox<P extends BaseTextBoxProps, S = {}, SS = any> extends BaseInput<P, S, SS> {
  static defaultProps = {
    type: 'text'
  };

  render() {
    return <StyledBaseTextBox {...this.props} />;
  }
}
