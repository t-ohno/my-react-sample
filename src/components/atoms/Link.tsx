import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const StyledLink = styled.a`
  cursor: pointer;
  color: #09d3ac;
`;

interface Props {
  className?: string;
  href: string;
  target?: string;
  children: React.ReactNode;
}

const Link: FunctionComponent<Props> = ({
  className,
  href,
  target = "_self",
  children
}) => (
  <StyledLink
    className={className}
    href={href}
    target={target}
    rel="noopener noreferrer"
  >
    {children}
  </StyledLink>
);

export default Link;
