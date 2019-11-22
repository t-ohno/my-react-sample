import React, { FunctionComponent } from "react";
import styled from "styled-components";
import BaseHeader from "components/organisms/Header";
import BaseFooter from "components/organisms/Footer";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
  border: 4px solid #0582dc;
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
`;

const Header = styled(BaseHeader)`
  grid-area: header;
`;

const Main = styled.main`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Footer = styled(BaseFooter)`
  grid-area: footer;
`;

interface Props {
  children: React.ReactNode;
}

const AuthenticatedTemplate: FunctionComponent<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header logoutClick={() => (window.location.pathname = "/Page2")} />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default AuthenticatedTemplate;
