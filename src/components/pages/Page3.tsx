import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Template from 'components/templates/AuthenticatedTemplate';
import Button from 'components/atoms/Button';
import styled from 'styled-components';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

export const Page3: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <Template>
      <Title>{t('pages.page3.title')}</Title>
      <Button text={t('pages.page3.buttonName')} />
    </Template>
  );
};

export default Page3;
