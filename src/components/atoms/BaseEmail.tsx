import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseEmail = styled(StyledBaseInput)``;

export interface BaseEmailProps extends BaseInputProps {}

export default abstract class BaseEmail<T extends BaseEmailProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'email'
  };

  render() {
    return <StyledBaseEmail {...this.props} />;
  }
}
