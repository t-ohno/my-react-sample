import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;

  p {
    color: #000;
    margin: 0;
  }
`;

const Footer: FunctionComponent = () => (
  <StyledFooter>
    <p>フッター</p>
  </StyledFooter>
);

export default Footer;
