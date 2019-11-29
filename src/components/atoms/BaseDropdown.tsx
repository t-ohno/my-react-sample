import React from 'react';
import styled from 'styled-components';

export const StyledBaseDropdown = styled.select``;

export interface BaseDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default abstract class BaseDropdown<T extends BaseDropdownProps> extends React.Component<T> {
  render() {
    return <StyledBaseDropdown {...this.props} />;
  }
}
