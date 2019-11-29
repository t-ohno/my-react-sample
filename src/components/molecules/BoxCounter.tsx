import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import counterModule from 'modules/counterModule';
import Button, { ButtonProps } from 'components/atoms/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: rgba(0, 0, 0, 1);

  label {
    display: flex;
    align-items: center;
    padding-right: 10px;

    span + span {
      margin-left: 5px;
    }
  }
`;

const Buttons = styled.div`
  > button + button {
    margin-left: 5px;
  }
`;

interface Props {
  label: string;
}

const BoxCounter: FunctionComponent<Props> = ({ label }) => {
  const [t] = useTranslation();

  const dispatch = useDispatch();
  const counter = useSelector<any, any>(state => state.counter);

  const incrementProps: ButtonProps = {
    tooltip: t('molecules.boxCounter.button.increment.tooltip'),
    children: t('molecules.boxCounter.button.increment.text'),
    onClick: () => dispatch(counterModule.actions.increment())
  };

  const decrementProps: ButtonProps = {
    tooltip: t('molecules.boxCounter.button.decrement.tooltip'),
    children: t('molecules.boxCounter.button.decrement.text'),
    onClick: () => dispatch(counterModule.actions.decrement())
  };

  const resetProps: ButtonProps = {
    tooltip: t('molecules.boxCounter.button.reset.tooltip'),
    children: t('molecules.boxCounter.button.reset.text'),
    onClick: () => dispatch(counterModule.actions.reset())
  };

  return (
    <Wrapper>
      <label>
        <span>{label}</span>
        <span>{counter}</span>
      </label>
      <Buttons>
        <Button {...incrementProps} />
        <Button {...decrementProps} />
        <Button {...resetProps} />
      </Buttons>
    </Wrapper>
  );
};

export default BoxCounter;
