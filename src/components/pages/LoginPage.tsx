import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledImg as BaseStyledImg } from "components/atoms/Logo";
import Username from "components/molecules/Username";
import Password from "components/molecules/Password";
import { StyledLoginButton as BaseStyledLoginButton } from "components/atoms/LoginButton";

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr auto auto 1fr;
  grid-row-gap: 10px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  border: 4px solid #0582dc;
  height: 100%;
`;

const Logo = styled(BaseStyledImg)`
  margin: 0 auto;
`;

const LoginButton = styled(BaseStyledLoginButton)`
  margin: 0 auto;
`;

const LoginPage: FunctionComponent = () => {
  return (
    <Wrapper>
      <Logo src="/assets/images/logo.svg" alt="logo" />
      <Username />
      <Password />
      <LoginButton onClick={() => (window.location.pathname = "/Page1")} />
    </Wrapper>
  );
};

export default LoginPage;
