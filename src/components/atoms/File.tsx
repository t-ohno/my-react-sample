import React from 'react';
import styled from 'styled-components';
import BaseFile, { BaseFileProps, StyledBaseFile } from 'components/atoms/BaseFile';

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

  span {
    padding-right: 10px;
  }
`;

export const StyledFile = styled(StyledBaseFile)``;

export interface FileProps extends BaseFileProps {
  label?: string;
}

export default class File extends BaseFile<FileProps> {
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
