import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  content: {
    position: 'absolute',
    color: 'lightsteelblue',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '4px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(5, 130, 220, 1)',
    border: 'none',
    borderRadius: '5px',
    minWidth: '300px'
  }
};

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 30px;
  background-color: transparent;
  color: white;

  > span {
    position: relative;
    padding-left: 18px;

    &::before {
      content: '';
      position: absolute;
      top: 3px;
      bottom: 2px;
      left: 10px;
      background: white;
      width: 2px;
    }
  }
`;

const CloseButton = styled.button.attrs({
  type: 'button'
})`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 1);
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: rgba(217, 217, 217, 1);
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const ModalBody = styled.div`
  margin: 0;
  padding: 10px 5px;
  background: white;
  border-radius: 0 0 5px 5px;
`;

export interface TemplateProps extends Modal.Props {
  title: string;
}

export type TemplateState = {};

export default class ModalTemplate extends React.Component<TemplateProps, TemplateState> {
  constructor(props: TemplateProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={customStyles}
        onAfterOpen={this.props.onAfterOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel={this.props.contentLabel}
      >
        <ModalHeader className="handle">
          <span>{this.props.title}</span>
          <CloseButton onClick={this.props.onRequestClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>{this.props.children}</ModalBody>
      </Modal>
    );
  }
}
