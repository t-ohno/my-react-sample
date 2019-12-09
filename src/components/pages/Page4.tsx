import React from 'react';
import styled from 'styled-components';
import { BasePageProps, MessageLevel } from 'app/types';
import BasePage from './BasePage';
import Template from 'components/templates/AuthenticatedTemplate';

const Title = styled.h1`
  color: rgba(6, 6, 6, 1);
`;

interface Props extends BasePageProps {}

type State = {};

export default class Page4 extends BasePage<Props, State> {
  render() {
    return (
      <Template
        messageLevel={MessageLevel.INFO}
        visibleMessageBar={false}
        showMessageBar={() => {}}
        hideMessageBar={() => {}}
      >
        <Title>Page4</Title>
      </Template>
    );
  }
}
