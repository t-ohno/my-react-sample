import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseRadioButton = styled(StyledBaseInput)`
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

export interface BaseRadioButtonProps extends BaseInputProps {}

export default abstract class BaseRadioButton<T extends BaseRadioButtonProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'radio'
  };

  render() {
    return <StyledBaseRadioButton {...this.props} />;
  }
}
