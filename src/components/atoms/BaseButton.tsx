import React from 'react';
import styled from 'styled-components';

export const StyledBaseButton = styled.button`
  margin: 0;
  padding: 0 10px;
  min-width: 24px;
  min-height: 24px;
  font-size: 1em;
  text-align: center;
  text-decoration: none;
  color: rgba(102, 102, 102, 1);

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

StyledBaseButton.defaultProps = {
  type: 'button'
};

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default abstract class BaseButton<T extends BaseButtonProps> extends React.Component<T> {
  render() {
    return <StyledBaseButton {...this.props} />;
  }
}
