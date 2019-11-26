import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledTextBox = styled.input`
  position: relative;
  min-width: 200px;
  min-height: 30px;
  font-size: 1em;
`;

export interface Props {
  type?: string;
  name?: string;
  required?: boolean;
}

const TextBox: FunctionComponent<Props> = ({ type = 'text', name, required }) => (
  <StyledTextBox type={type} name={name} aria-required={required} />
);

export default TextBox;
