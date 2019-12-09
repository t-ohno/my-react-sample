import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MessageLevel } from 'app/types';
import Template from 'components/templates/AuthenticatedTemplate';
import BoxCounter from 'components/molecules/BoxCounter';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

const Page1: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <Template
      messageLevel={MessageLevel.INFO}
      visibleMessageBar={false}
      showMessageBar={() => {}}
      hideMessageBar={() => {}}
    >
      <Title>{t('pages.page1.title')}</Title>
      <BoxCounter label={t('pages.page1.boxCounter.label')} />
    </Template>
  );
};

export default Page1;
