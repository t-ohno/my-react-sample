import React from 'react';
import styled from 'styled-components';
import BaseTel, { BaseTelProps, StyledBaseTel } from 'components/atoms/BaseTel';

export const StyledTel = styled(StyledBaseTel)`
  min-width: 200px;
  min-height: 30px;
  font-size: 1em;
`;

export interface TelProps extends BaseTelProps {}

export default class Tel extends BaseTel<TelProps> {
  static defaultProps = {
    type: 'tel',
    pattern: '\\d{1,5}-\\d{1,4}-\\d{4,5}',
    placeholder: '00-0000-0000'
  };

  render() {
    return <StyledTel {...this.props} />;
  }
}
