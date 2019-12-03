import React from 'react';
import styled from 'styled-components';

export const StyledBaseDropdown = styled.select`
  min-width: 100px;
  min-height: 24px;
  font-size: 1em;
  text-decoration: none;
  color: rgba(0, 0, 0, 1);

  &:hover {
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;

    &:hover {
      cursor: default;
    }
  }
`;

export interface BaseDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default abstract class BaseDropdown<T extends BaseDropdownProps> extends React.Component<T> {
  render() {
    return <StyledBaseDropdown {...this.props} />;
  }
}
