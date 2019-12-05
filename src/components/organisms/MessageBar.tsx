import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from 'components/atoms/Button';

const ShowMessageArea = keyframes`
  0% {
    height: 0
  }
  10% {
    height: 15px
  }
  20% {
    height: 35px
  }
  40% {
    height: 55px
  }
  60% {
    height: 75px
  }
  80% {
    height: 100px
  }
  100% {
    height: 130px
  }
`;

const StyledMessageArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 130px;
  background-color: rgba(200, 240, 255, 1);
  z-index: 1;
  animation: ${ShowMessageArea} 300ms ease-in-out;

  button {
    display: inline;
  }
`;

interface Props {
  message?: string;
  onClose: () => void;
}

type State = {};

export default class MessageBar extends React.Component<Props, State> {
  render() {
    return (
      <StyledMessageArea>
        <span>{this.props.message}</span>
        <Button onClick={this.props.onClose}>close</Button>
      </StyledMessageArea>
    );
  }
}
