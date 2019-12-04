import React from 'react';
import styled from 'styled-components';
import BaseEmail, { BaseEmailProps, StyledBaseEmail } from 'components/atoms/BaseEmail';

export const StyledEmail = styled(StyledBaseEmail)`
  min-width: 200px;
  min-height: 30px;
  font-size: 1em;
`;

export interface EmailProps extends BaseEmailProps {}

export default class Email extends BaseEmail<EmailProps> {
  static defaultProps = {
    type: 'email',
    placeholder: 'name@domain'
  };

  render() {
    return <StyledEmail {...this.props} />;
  }
}
