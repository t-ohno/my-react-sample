import React from 'react';
import styled from 'styled-components';
import BaseNumber, { BaseNumberProps, StyledBaseNumber } from 'components/atoms/BaseNumber';

export const StyledNumber = styled(StyledBaseNumber)`
  min-width: 200px;
  min-height: 30px;
  font-size: 1em;
`;

export interface NumberProps extends BaseNumberProps {}

export default class Number extends BaseNumber<NumberProps> {
  render() {
    return <StyledNumber {...this.props} />;
  }
}
