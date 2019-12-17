import React from 'react';
import styled from 'styled-components';

export const StyledLink = styled.a`
  cursor: pointer;
  color: rgba(0, 0, 0, 1);

  &:visited {
    color: rgba(9, 211, 171, 1);
  }

  &:hover {
    color: rgba(42, 115, 204, 1);
  }
`;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

export default class Link extends React.Component<LinkProps> {
  static defaultProps = {
    disabled: false
  };

  render() {
    if (this.props.disabled) {
      return <span>{this.props.children}</span>;
    } else {
      return <StyledLink {...this.props} rel="noopener noreferrer" />;
    }
  }
}
