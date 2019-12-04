import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseNumber = styled(StyledBaseInput)``;

export interface BaseNumberProps extends BaseInputProps {}

export default abstract class BaseNumber<T extends BaseNumberProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'number'
  };

  render() {
    return <StyledBaseNumber {...this.props} />;
  }
}
