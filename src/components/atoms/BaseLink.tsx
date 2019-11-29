import React from 'react';
import styled from 'styled-components';

export const StyledBaseLink = styled.a``;

export interface BaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default abstract class BaseLink<T extends BaseLinkProps> extends React.Component<T> {
  render() {
    return <StyledBaseLink {...this.props} />;
  }
}
