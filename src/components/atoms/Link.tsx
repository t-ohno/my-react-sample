import React from 'react';
import styled from 'styled-components';

export const StyledLink = styled.a`
  cursor: pointer;
  color: rgba(9, 211, 171, 1);
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
