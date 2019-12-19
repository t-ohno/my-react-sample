import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import { MessageLevel } from 'app/types';
import Button from 'components/atoms/Button';

const showMessageBar = keyframes`
  0% {
    height: 0
  }
  10% {
    height: 15px
  }
  20% {
    height: 35px
  }
  40% {
    height: 55px
  }
  60% {
    height: 75px
  }
  80% {
    height: 100px
  }
  100% {
    height: 130px
  }
`;

const StyledMessageBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 1px 10px;
  height: 130px;
  background-color: rgba(200, 240, 255, 1);
  z-index: 1;
  animation: ${showMessageBar} 300ms ease-in-out;

  &.info {
    background-color: rgba(200, 240, 255, 1);
  }

  &.warn {
    background-color: rgba(204, 204, 204, 1);
  }

  &.err {
    background-color: rgba(248, 180, 45, 1);
  }
`;

const MessageArea = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px 5px 140px;
  width: 100%;
  max-height: 100%;
  min-height: 0;
`;

const Icon = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  width: 98px;
  height: 88px;
`;

const Messages = styled.div`
  overflow: auto;
  overflow-wrap: break-word;
  word-break: break-all;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 20px;
  width: 100%;
  max-height: 100%;
  min-height: 0;
`;

const Message = styled.p`
  flex: none;
  margin: 0;
`;

const HideButton = styled(Button)`
  width: 100px;
`;

interface Props {
  messageLevel: MessageLevel;
  message?: string;
  onClose: () => void;
}

const MessageBar: React.FunctionComponent<Props> = (props: Props) => {
  const [t] = useTranslation();
  const [className, setClassName] = useState('info');

  useEffect(() => {
    if (props.messageLevel === MessageLevel.ERR) {
      setClassName('err');
    } else if (props.messageLevel === MessageLevel.WARN) {
      setClassName('warn');
    } else {
      setClassName('info');
    }
  }, [props.messageLevel]);

  return (
    <StyledMessageBar className={className}>
      <MessageArea>
        <Icon>{props.messageLevel}</Icon>
        <Messages>
          {props.message && props.message.split('\n').map((message, index) => <Message key={index}>{message}</Message>)}
        </Messages>
      </MessageArea>
      <HideButton onClick={props.onClose}>{t('organisms.messageBar.hideButton')}</HideButton>
    </StyledMessageBar>
  );
};

MessageBar.defaultProps = {
  messageLevel: MessageLevel.INFO
};

export default MessageBar;
