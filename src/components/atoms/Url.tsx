import React from 'react';
import styled from 'styled-components';

export const StyledUrl = styled.input`
  min-width: 200px;
  min-height: 25px;
  font-size: 1rem;

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;
  }
`;

export interface UrlProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class Url extends React.Component<UrlProps> {
  static defaultProps = {
    type: 'url'
  };

  render() {
    return <StyledUrl {...this.props} />;
  }
}
