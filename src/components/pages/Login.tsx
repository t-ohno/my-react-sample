import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledImg as BaseStyledImg } from "components/atoms/Logo";
import UserId from "components/molecules/UserIdTextBox";
import { StyledLoginButton as BaseStyledLoginButton } from "components/atoms/LoginButton";
import Password from "components/molecules/PasswordTextBox";

const StyledSection = styled.section`
  display: grid;
  grid-row: 1fr auto auto 1fr;
  grid-row-gap: 10px;
  justify-content: center;
`;

const StyledLogo = styled(BaseStyledImg)`
  margin: 0 auto;
  height: 20vmin;
`;

const StyledLoginButton = styled(BaseStyledLoginButton)`
  margin: 0 auto;
`;

const Login: FunctionComponent = () => {
  return (
    <StyledSection>
      <StyledLogo src="/assets/images/logo.svg" alt="logo" />
      <UserId />
      <Password />
      <StyledLoginButton />
    </StyledSection>
  );
};

export default Login;
