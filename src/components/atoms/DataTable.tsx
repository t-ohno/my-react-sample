import React from 'react';
import styled from 'styled-components';
import { HeaderColumn, useTable, TableOptions } from 'react-table';

const Styles = styled.div`
  overflow: hidden;
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid rgba(128, 128, 128, 1);

    tr {
      :last-child {
        td {
          border-bottom: 0;
          color: rgba(0, 0, 0, 1);
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(128, 128, 128, 1);
      border-right: 1px solid rgba(128, 128, 128, 1);
      color: rgba(0, 0, 0, 1);

      :last-child {
        border-right: 0;
      }

      tbody {
        overflow: auto;
      }
    }
  }
`;

const HeaderCell = styled.th`
  &:hover {
    background-color: rgba(187, 187, 187, 1);
  }
`;

const Row = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(240, 250, 255, 1);
  }

  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 1);
  }

  &:hover {
    background-color: rgba(206, 219, 239, 1);
  }
`;

const Table = ({ columns, data }: any) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <HeaderCell {...column.getHeaderProps()}>{column.render('Header')}</HeaderCell>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <Row {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </Row>
          );
        })}
      </tbody>
    </table>
  );
};

interface Props<D> extends TableOptions<D> {
  data: D[];
  columns: HeaderColumn<D>[];
}

export default class DataTable<D> extends React.Component<Props<D>> {
  render() {
    return (
      <Styles>
        <Table columns={this.props.columns} data={this.props.data} />
      </Styles>
    );
  }
}
