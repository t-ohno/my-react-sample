import React from 'react';
import styled from 'styled-components';
import BaseDropdown, { BaseDropdownProps, StyledBaseDropdown } from './BaseDropdown';

const StyledDropdown = styled(StyledBaseDropdown)``;

interface DropdownProps extends BaseDropdownProps {}

export default class Dropdown extends BaseDropdown<DropdownProps> {
  render() {
    return <StyledDropdown {...this.props} />;
  }
}
