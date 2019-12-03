import React from 'react';
import styled from 'styled-components';
import BaseDropdown, { BaseDropdownProps, StyledBaseDropdown } from 'components/atoms/BaseDropdown';

const StyledDropdown = styled(StyledBaseDropdown)`
  position: relative;
  top: 0;
  margin: 0;
  padding: 0 24px 0 8px;
  border: 1px solid rgba(151, 151, 151, 1);
  border-radius: 4px;
  font-size: 14px;

  appearance: none;
  outline: none;

  background: url('assets/images/dropdown/dropdown1.svg') right 8px center no-repeat,
    linear-gradient(rgba(245, 245, 245, 1), rgba(230, 230, 230, 1), rgba(200, 200, 200, 1));

  &:hover {
    background: url('assets/images/dropdown/dropdown1.svg') right 8px center no-repeat,
      linear-gradient(rgba(197, 197, 197, 1), rgba(183, 183, 183, 1), rgba(179, 179, 179, 1));
  }
`;

interface DropdownProps extends BaseDropdownProps {}

export default class Dropdown extends BaseDropdown<DropdownProps> {
  render() {
    return <StyledDropdown {...this.props} />;
  }
}
