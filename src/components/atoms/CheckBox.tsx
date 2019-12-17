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

export const StyledCheckBox = styled.input`
  &:hover {
    cursor: pointer;
  }

  &[aria-disabled='true'],
  &:disabled {
    &:hover {
      cursor: not-allowed;
    }
  }
`;

export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default class CheckBox extends React.Component<CheckBoxProps> {
  static defaultProps = {
    type: 'checkbox'
  };

  render() {
    if (this.props.label) {
      return (
        <SyledLabel aria-disabled={this.props.disabled}>
          <StyledCheckBox {...this.props} />
          <span>{this.props.label}</span>
        </SyledLabel>
      );
    }
    return <StyledCheckBox {...this.props} />;
  }
}
