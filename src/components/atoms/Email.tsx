import React from 'react';
import styled from 'styled-components';

export const StyledEmail = styled.input`
  min-width: 200px;
  min-height: 30px;
  font-size: 1em;
`;

export interface EmailProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class Email extends React.Component<EmailProps> {
  static defaultProps = {
    type: 'email',
    placeholder: 'name@domain'
  };

  render() {
    return <StyledEmail {...this.props} />;
  }
}
