import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseTel = styled(StyledBaseInput)``;

export interface BaseTelProps extends BaseInputProps {}

export default abstract class BaseTel<T extends BaseTelProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'tel'
  };

  render() {
    return <StyledBaseTel {...this.props} />;
  }
}
