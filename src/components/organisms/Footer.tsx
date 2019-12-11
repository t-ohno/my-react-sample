import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;

  p {
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
`;

const Footer: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <StyledFooter>
      <p>{t('organisms.footer.copyright')}</p>
    </StyledFooter>
  );
};

export default Footer;
