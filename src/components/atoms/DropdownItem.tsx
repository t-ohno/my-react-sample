import React from 'react';
import styled from 'styled-components';

const StyledDropdownItem = styled.option``;

interface DropdownItemProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export default class DropdownItem extends React.Component<DropdownItemProps> {
  render() {
    return <StyledDropdownItem {...this.props} />;
  }
}
