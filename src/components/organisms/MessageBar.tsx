import React from 'react';
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
`;

const MessageArea = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-left: 140px;
  width: 100%;
`;

const Icon = styled.div`
  background-color: white;
  width: 98px;
  height: 88px;
`;

const Message = styled.p`
  margin-left: 20px;
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

  return (
    <StyledMessageBar>
      <MessageArea>
        <Icon>{props.messageLevel}</Icon>
        <Message>{props.message}</Message>
      </MessageArea>
      <HideButton onClick={props.onClose}>{t('organisms.messageBar.hideButton')}</HideButton>
    </StyledMessageBar>
  );
};

MessageBar.defaultProps = {
  messageLevel: MessageLevel.INFO,
  message: undefined
};

export default MessageBar;
