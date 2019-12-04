import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseUrl = styled(StyledBaseInput)``;

export interface BaseUrlProps extends BaseInputProps {}

export default abstract class BaseUrl<T extends BaseUrlProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'url'
  };

  render() {
    return <StyledBaseUrl {...this.props} />;
  }
}
