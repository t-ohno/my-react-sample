import React from 'react';
import { storiesOf } from '@storybook/react';
import { Column } from 'react-table';
import DataTable from './DataTable';

const stories = storiesOf('atoms.DataTable', module);

type DataType = {
  id: string;
  title: string;
};

const columns: Column<DataType>[] = [
  { id: 'id', Header: 'ID', accessor: (row: DataType) => row.id },
  { id: 'title', Header: 'title', accessor: (row: DataType) => row.title }
];

const data: DataType[] = [
  { id: '1', title: 'aaaaa' },
  { id: '2', title: 'bbbbb' },
  { id: '3', title: 'ccccc' },
  { id: '4', title: 'ddddd' },
  { id: '5', title: 'eeeee' }
];

stories.add('Basic', () => <DataTable columns={columns} data={data} />, { notes: 'DataTable' });
