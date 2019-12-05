import React from 'react';
import styled from 'styled-components';
import BaseButton, { BaseButtonProps, StyledBaseButton } from 'components/atoms/BaseButton';
import Tippy from '@tippy.js/react';
import { TooltipProps } from 'app/types';

export const StyledButton = styled(StyledBaseButton)`
  background: linear-gradient(rgba(245, 245, 245, 1), rgba(230, 230, 230, 1), rgba(200, 200, 200, 1));
  border: 1px solid rgba(151, 151, 151, 1);
  border-radius: 4px;

  &:hover {
    background: linear-gradient(rgba(197, 197, 197, 1), rgba(183, 183, 183, 1), rgba(179, 179, 179, 1));
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.45;

    &:hover {
      background: linear-gradient(rgba(245, 245, 245, 1), rgba(230, 230, 230, 1), rgba(200, 200, 200, 1));
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
    }
  }
`;

export interface ButtonProps extends BaseButtonProps, TooltipProps {}

export default class Button extends BaseButton<ButtonProps> {
  render() {
    if (this.props.tooltipContent) {
      return (
        <Tippy content={this.props.tooltipContent}>
          <StyledButton {...this.props} />
        </Tippy>
      );
    } else {
      return <StyledButton {...this.props} />;
    }
  }
}
