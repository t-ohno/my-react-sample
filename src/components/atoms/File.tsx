import React from 'react';
import styled from 'styled-components';

const SyledLabel = styled.label`
  color: rgba(0, 0, 0, 1);

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

  span {
    padding-right: 10px;
  }
`;

export const StyledFile = styled.input`
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

export interface FileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default class File extends React.Component<FileProps> {
  static defaultProps = {
    type: 'file'
  };

  render() {
    if (this.props.label) {
      return (
        <SyledLabel aria-disabled={this.props.disabled}>
          <span>{this.props.label}</span>
          <StyledFile {...this.props} />
        </SyledLabel>
      );
    }
    return <StyledFile {...this.props} />;
  }
}
