import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BasePageProps, MessageLevel } from 'app/types';
import Template from 'components/templates/AuthenticatedTemplate';
import TextBox from 'components/atoms/TextBox';
import Button from 'components/atoms/Button';
import RadioButton from 'components/atoms/RadioButton';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

const RadioButtons = styled.div`
  display: flex;
  align-items: center;
`;

const MessageInput = styled.div`
  display: flex;

  button {
    margin-left: 10px;
  }
`;

interface Props extends BasePageProps {}

const Page2: React.FunctionComponent<Props> = () => {
  const [t] = useTranslation();

  const [messageLevel, setMessageLevel]: any = React.useState(MessageLevel.INFO);
  const [messageBarValue, setMessageBarValue] = React.useState('');
  const [visibleMessageBar, setVisibleMessageBar] = React.useState(false);

  const radioChange = (e: React.ChangeEvent<HTMLInputElement>) => setMessageLevel(e.target.value);
  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => setMessageBarValue(e.target.value);

  return (
    <Template
      visibleMessageBar={visibleMessageBar}
      messageLevel={messageLevel}
      messageBarValue={messageBarValue}
      showMessageBar={() => {
        setVisibleMessageBar(true);
      }}
      hideMessageBar={() => {
        setVisibleMessageBar(false);
      }}
    >
      <Title>{t('pages.page2.title')}</Title>
      <MessageInput>
        <RadioButtons>
          <RadioButton
            name="messageLevel"
            value={MessageLevel.INFO}
            label="INFO"
            onChange={radioChange}
            defaultChecked={messageLevel === MessageLevel.INFO}
          />
          <RadioButton
            name="messageLevel"
            value={MessageLevel.WARN}
            label="WARN"
            onChange={radioChange}
            defaultChecked={messageLevel === MessageLevel.WARN}
          />
          <RadioButton
            name="messageLevel"
            value={MessageLevel.ERR}
            label="ERR"
            onChange={radioChange}
            defaultChecked={messageLevel === MessageLevel.ERR}
          />
        </RadioButtons>
        <TextBox value={messageBarValue} onChange={textChange} />
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
