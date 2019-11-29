import React from 'react';
import styled from 'styled-components';
import BaseLink, { BaseLinkProps } from 'components/atoms/BaseLink';

export const StyledLink = styled.a`
  cursor: pointer;
  color: #09d3ac;
`;

interface LinkProps extends BaseLinkProps {
  className?: string;
  href: string;
  target?: string;
  children: React.ReactNode;
}

export default class Link extends BaseLink<LinkProps> {
  render() {
    return <StyledLink {...this.props} rel="noopener noreferrer" />;
  }
}
