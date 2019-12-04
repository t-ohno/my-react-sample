import React from 'react';
import styled from 'styled-components';
import BasePassword, { BasePasswordProps, StyledBasePassword } from 'components/atoms/BasePassword';

export const StyledPassword = styled(StyledBasePassword)`
  min-width: 200px;
  min-height: 30px;
  font-size: 1em;
`;

export interface PasswordProps extends BasePasswordProps {}

export default class Password extends BasePassword<PasswordProps> {
  render() {
    return <StyledPassword {...this.props} />;
  }
}
