import React, { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
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

const Footer: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <StyledFooter>
      <p>{t("footer.copyright")}</p>
    </StyledFooter>
  );
};

export default Footer;
