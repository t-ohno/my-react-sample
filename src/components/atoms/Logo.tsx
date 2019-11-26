import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledImg = styled.img`
  height: 100%;
`;

interface Props {
  src?: string;
  alt?: string;
}

const Logo: FunctionComponent<Props> = ({ src = '/assets/images/logo.svg', alt = 'Logo' }) => (
  <StyledImg src={src} alt={alt} />
);

export default Logo;
