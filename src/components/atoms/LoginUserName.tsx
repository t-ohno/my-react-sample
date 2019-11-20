import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const StyledSpan = styled.span`
  display: inline-block;
  position: relative;
  padding-left: 24px;
  height: 38px;
  line-height: 38px;
  font-size: 0.9em;

  &::before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: transparent url("/assets/images/icons/userIcon.png") center
      center no-repeat;
    width: 24px;
    height: 38px;
  }
`;

interface Props {
  name: string;
}

const LoginUserName: FunctionComponent<Props> = ({ name }) => (
  <StyledSpan>こんにちは {name} 様</StyledSpan>
);

export default LoginUserName;
