import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippy.js/react';
import { TooltipProps } from 'app/types';

export const StyledButton = styled.button`
  margin: 0;
  padding: 0 10px;
  min-width: 24px;
  min-height: 24px;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: rgba(102, 102, 102, 1);

  background: linear-gradient(rgba(245, 245, 245, 1), rgba(230, 230, 230, 1), rgba(200, 200, 200, 1));
  border: 1px solid rgba(151, 151, 151, 1);
  border-radius: 4px;

  &:hover {
    background: linear-gradient(rgba(197, 197, 197, 1), rgba(183, 183, 183, 1), rgba(179, 179, 179, 1));
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.5;

    &:hover {
      background: linear-gradient(rgba(245, 245, 245, 1), rgba(230, 230, 230, 1), rgba(200, 200, 200, 1));
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
      cursor: not-allowed;
    }
  }
`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, TooltipProps {}

export default class Button extends React.Component<ButtonProps> {
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
