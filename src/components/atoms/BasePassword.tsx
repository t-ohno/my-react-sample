import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBasePassword = styled(StyledBaseInput)``;

export interface BasePasswordProps extends BaseInputProps {}

export default abstract class BasePassword<T extends BasePasswordProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'password'
  };

  render() {
    return <StyledBasePassword {...this.props} />;
  }
}
