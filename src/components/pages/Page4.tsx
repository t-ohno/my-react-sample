import React from 'react';
import styled from 'styled-components';
import { BasePageProps } from 'app/types';
import BasePage from './BasePage';
import Template from 'components/templates/AuthenticatedTemplate';

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
`;

interface Props extends BasePageProps {}

type State = {};

export default class Page4 extends BasePage<Props, State> {
  render() {
    return (
      <Template visibleMessageBar={false} showMessageBar={() => {}} hideMessageBar={() => {}}>
        <Title>Page4</Title>
      </Template>
    );
  }
}
