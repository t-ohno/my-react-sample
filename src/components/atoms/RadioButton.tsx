import React from 'react';
import styled from 'styled-components';
import BaseRadioButton, { BaseRadioButtonProps, StyledBaseRadioButton } from 'components/atoms/BaseRadioButton';

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

export const StyledRadioButton = styled(StyledBaseRadioButton)``;

export interface RadioButtonProps extends BaseRadioButtonProps {
  label?: string;
}

export default class RadioButton extends BaseRadioButton<RadioButtonProps> {
  render() {
    if (this.props.label) {
      return (
        <SyledLabel aria-disabled={this.props.disabled}>
          <BaseRadioButton {...this.props} />
          <span>{this.props.label}</span>
        </SyledLabel>
      );
    }
    return <BaseRadioButton {...this.props} />;
  }
}
