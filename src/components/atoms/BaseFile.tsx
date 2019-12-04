import React from 'react';
import styled from 'styled-components';
import BaseInput, { BaseInputProps, StyledBaseInput } from 'components/atoms/BaseInput';

export const StyledBaseFile = styled(StyledBaseInput)`
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

export interface BaseFileProps extends BaseInputProps {}

export default abstract class BaseFile<T extends BaseFileProps> extends BaseInput<T> {
  static defaultProps = {
    type: 'file'
  };

  render() {
    return <StyledBaseFile {...this.props} />;
  }
}
