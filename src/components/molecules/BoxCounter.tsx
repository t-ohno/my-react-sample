import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import counterModule from "modules/counterModule";
import Button from "components/atoms/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  label {
    padding-right: 10px;
  }
`;

const Buttons = styled.div`
  button + button {
    margin-left: 5px;
  }
`;

const BoxCounter: FunctionComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector<any, any>(state => state.counter);

  const increment = () => dispatch(counterModule.actions.increment());
  const decrement = () => dispatch(counterModule.actions.decrement());
  const reset = () => dispatch(counterModule.actions.reset());

  return (
    <Wrapper>
      <label>
        <span>数</span>
        <span>{counter}</span>
      </label>
      <Buttons>
        <Button text="+" onClick={increment} />
        <Button text="-" onClick={decrement} />
        <Button text="reset" onClick={reset} />
      </Buttons>
    </Wrapper>
  );
};

export default BoxCounter;
