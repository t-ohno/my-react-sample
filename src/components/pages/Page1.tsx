import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Template from 'components/templates/AuthenticatedTemplate';
import BoxCounter from 'components/molecules/BoxCounter';
import styled from 'styled-components';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

const Page1: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <Template>
      <Title>{t('pages.page1.title')}</Title>
      <BoxCounter label={t('pages.page1.boxCounter.label')} />
    </Template>
  );
};

export default Page1;
