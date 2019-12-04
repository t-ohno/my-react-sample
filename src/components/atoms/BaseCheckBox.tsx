import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseCheckBox = styled(StyledBaseInput)`
  &:hover {
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    &:hover {
      cursor: default;
    }
  }
`;

export interface BaseCheckBoxProps extends BaseInputProps {}

export default abstract class BaseCheckBox<T extends BaseCheckBoxProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'checkbox'
  };

  render() {
    return <StyledBaseCheckBox {...this.props} />;
  }
}