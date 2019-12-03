import React from 'react';
import styled from 'styled-components';
import BaseCheckBox, { BaseCheckBoxProps, StyledBaseCheckBox } from 'components/atoms/BaseCheckBox';

const SyledLabel = styled.label`
  color: black;

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

export const StyledCheckBox = styled(StyledBaseCheckBox)``;

export interface CheckBoxProps extends BaseCheckBoxProps {
  label?: string;
}

export default class CheckBox extends BaseCheckBox<CheckBoxProps> {
  render() {
    if (this.props.label) {
      return (
        <SyledLabel aria-disabled={this.props.disabled}>
          <StyledCheckBox />
          <span>{this.props.label}</span>
        </SyledLabel>
      );
    }
    return <StyledCheckBox />;
  }
}
