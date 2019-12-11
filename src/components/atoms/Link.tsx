import React from 'react';
import styled from 'styled-components';

export const StyledLink = styled.a`
  cursor: pointer;
  color: rgba(9, 211, 171, 1);
`;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default class Link extends React.Component<LinkProps> {
  static defaultProps = {};

  render() {
    return <StyledLink {...this.props} rel="noopener noreferrer" />;
  }
}
