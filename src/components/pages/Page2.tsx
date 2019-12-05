import React from 'react';
import { useTranslation } from 'react-i18next';
import { BasePageProps } from 'app/types';
import Template from 'components/templates/AuthenticatedTemplate';
import TextBox from 'components/atoms/TextBox';
import Button from 'components/atoms/Button';
import styled from 'styled-components';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

interface Props extends BasePageProps {}

const Page2: React.FunctionComponent<Props> = (props: Props) => {
  const [messageBarValue, setMessageBarValue] = React.useState(props.messageBarValue);
  const [t] = useTranslation();

  return (
    <Template>
      <Title>{t('pages.page2.title')}</Title>
      <TextBox
        value={messageBarValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessageBarValue(event.target.value)}
      />
      <Button onClick={props.showMessageBar}>{t('pages.page2.showMessageBar')}</Button>
    </Template>
  );
};

export default Page2;
