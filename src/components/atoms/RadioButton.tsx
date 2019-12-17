import React from 'react';
import styled from 'styled-components';

const SyledLabel = styled.label`
  display: flex;
  align-items: center;
  padding-right: 0.5ex;
  color: rgba(0, 0, 0, 1);

  &:hover {
    color: rgba(42, 115, 204, 1);
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

export const StyledRadioButton = styled.input`
  &:hover {
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    opacity: 0.5;

    &:hover {
      cursor: default;
    }
  }
`;

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default class RadioButton extends React.Component<RadioButtonProps> {
  static defaultProps = {
    type: 'radio'
  };

  render() {
    if (this.props.label) {
      return (
        <SyledLabel aria-disabled={this.props.disabled}>
          <StyledRadioButton {...this.props} />
          <span>{this.props.label}</span>
        </SyledLabel>
      );
    }
    return <StyledRadioButton {...this.props} />;
  }
}
