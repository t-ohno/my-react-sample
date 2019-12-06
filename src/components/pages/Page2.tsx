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

const MessageInput = styled.div`
  display: flex;

  button {
    margin-left: 10px;
  }
`;

interface Props extends BasePageProps {}

const Page2: React.FunctionComponent<Props> = () => {
  const [message, setMessage] = React.useState('Hello World.');
  const [visibleMessageBar, setVisibleMessageBar] = React.useState(false);
  const [t] = useTranslation();

  return (
    <Template
      visibleMessageBar={visibleMessageBar}
      messageBarValue={message}
      showMessageBar={() => {
        setVisibleMessageBar(true);
      }}
      hideMessageBar={() => {
        setVisibleMessageBar(false);
      }}
    >
      <Title>{t('pages.page2.title')}</Title>
      <MessageInput>
        <TextBox value={message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} />
        <Button
          onClick={() => {
            setVisibleMessageBar(true);
          }}
        >
          {t('pages.page2.showMessageBar')}
        </Button>
      </MessageInput>
    </Template>
  );
};

export default Page2;
