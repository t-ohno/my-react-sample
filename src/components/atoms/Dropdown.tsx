import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.select`
  position: relative;
  top: 0;
  margin: 0;

  padding: 0 24px 0 8px;
  border: 1px solid rgba(151, 151, 151, 1);
  border-radius: 4px;
  min-width: 100px;
  min-height: 24px;
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  font-size: 1rem;

  appearance: none;
  outline: none;

  background: url('assets/images/dropdown/dropdown1.svg') right 8px center no-repeat,
    linear-gradient(rgba(245, 245, 245, 1), rgba(230, 230, 230, 1), rgba(200, 200, 200, 1));

  &:hover {
    background: url('assets/images/dropdown/dropdown1.svg') right 8px center no-repeat,
      linear-gradient(rgba(197, 197, 197, 1), rgba(183, 183, 183, 1), rgba(179, 179, 179, 1));
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.5;

    &:hover {
      background: url('assets/images/dropdown/dropdown1.svg') right 8px center no-repeat,
        linear-gradient(rgba(245, 245, 245, 1), rgba(230, 230, 230, 1), rgba(200, 200, 200, 1));
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
      cursor: not-allowed;
    }
  }
`;

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default class Dropdown extends React.Component<DropdownProps> {
  render() {
    return <StyledDropdown {...this.props} />;
  }
}
