import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import counterModule from 'modules/counterModule';
import Button from 'components/atoms/Button';
import { Tooltip } from 'react-tippy';

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
  > div + div {
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

  const increment = () => dispatch(counterModule.actions.increment());
  const decrement = () => dispatch(counterModule.actions.decrement());
  const reset = () => dispatch(counterModule.actions.reset());

  return (
    <Wrapper>
      <label>
        <span>{label}</span>
        <span>{counter}</span>
      </label>
      <Buttons>
        <Tooltip title={t('molecules.boxCounter.button.increment.tooltip')}>
          <Button text={t('molecules.boxCounter.button.increment.text')} onClick={increment} />
        </Tooltip>
        <Tooltip title={t('molecules.boxCounter.button.decrement.tooltip')}>
          <Button text={t('molecules.boxCounter.button.decrement.text')} onClick={decrement} />
        </Tooltip>
        <Tooltip title={t('molecules.boxCounter.button.reset.tooltip')}>
          <Button text={t('molecules.boxCounter.button.reset.text')} onClick={reset} />
        </Tooltip>
      </Buttons>
    </Wrapper>
  );
};

export default BoxCounter;
