import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const StyledImg = styled.img`
  height: 100%;
`;

export interface LogoProps {
  src?: string;
  alt?: string;
}

StyledImg.defaultProps = {
  src: '/assets/images/logo.svg',
  alt: 'Logo'
};

const Logo: FunctionComponent<LogoProps> = ({ src, alt }) => <StyledImg src={src} alt={alt} />;

export default Logo;
