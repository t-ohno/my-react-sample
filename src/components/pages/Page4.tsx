import React from 'react';
import { Translation } from 'react-i18next';
import { Column } from 'react-table';
import styled from 'styled-components';
import { BasePageProps, MessageLevel, TodoData } from 'app/types';
import BasePage from './BasePage';
import Template from 'components/templates/AuthenticatedTemplate';
import DataTable from 'components/atoms/DataTable';

const Title = styled.h1`
  color: rgba(6, 6, 6, 1);
`;

interface Props extends BasePageProps {}

type State = {
  data: TodoData[];
};

const columns: Column<TodoData>[] = [
  { id: 'id', Header: 'ID', accessor: (row: TodoData) => `${row.id}` },
  { id: 'title', Header: 'title', accessor: (row: TodoData) => row.title },
  { id: 'completed', Header: 'completed', accessor: (row: TodoData) => `${row.completed}` }
];

export default class Page4 extends BasePage<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <Translation>
        {t => (
          <Template
            messageLevel={MessageLevel.INFO}
            visibleMessageBar={false}
            showMessageBar={() => {}}
            hideMessageBar={() => {}}
          >
            <Title>{t('pages.page4.title')}</Title>
            <DataTable columns={columns} data={this.state.data} />
          </Template>
        )}
      </Translation>
    );
  }
}
