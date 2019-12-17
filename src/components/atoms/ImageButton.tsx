import React from 'react';
import styled from 'styled-components';

export const StyledImageButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background: transparent url('/assets/images/buttons/loginbutton_up.png') center center no-repeat;

  min-width: 24px;
  min-height: 24px;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: rgba(102, 102, 102, 1);

  &:hover {
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

export interface ImageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default class ImageButton<P extends ImageButtonProps> extends React.Component<P> {
  render() {
    return <StyledImageButton {...this.props} />;
  }
}
