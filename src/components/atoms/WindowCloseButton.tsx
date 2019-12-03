import React from 'react';
import styled from 'styled-components';
import BaseButton, { BaseButtonProps, StyledBaseButton } from 'components/atoms/BaseButton';

export const StyledLogoutButton = styled(StyledBaseButton)`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  width: 20px;
  height: 20px;
  color: white;
  font-size: 1em;
  font-weight: bold;

  &:hover {
    color: rgba(217, 217, 217, 1);
  }

  &:focus {
    outline: 0;
  }
`;

export interface WindowCloseButtonProps extends BaseButtonProps {}

export default class WindowCloseButton extends BaseButton<WindowCloseButtonProps> {
  render() {
    return <StyledLogoutButton {...this.props}>X</StyledLogoutButton>;
  }
}
