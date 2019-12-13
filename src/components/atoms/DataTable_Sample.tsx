import React from 'react';
import styled from 'styled-components';
import CheckBox from 'components/atoms/CheckBox';

const StyledDataTable = styled.table`
  border: solid 1px rgba(128, 128, 128, 1);
  border-collapse: collapse;
`;

const Header = styled.thead`
  color: rgba(0, 0, 0, 1);
`;

const Body = styled.tbody`
  color: rgba(0, 0, 0, 1);
`;

const HeaderRow = styled.tr``;

const HeaderColumn = styled.th`
  padding: 3px;
  border: solid 1px rgba(128, 128, 128, 1);

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

const Column = styled.td`
  padding: 3px;
  border: solid 1px rgba(128, 128, 128, 1);
`;

export interface DataTableProps {
  headers: object;
  bodyRows: object[];
}

export default class DataTable extends React.Component<DataTableProps> {
  render() {
    const { headers, bodyRows } = this.props;

    const headerMarkup = (
      <HeaderRow>
        <HeaderColumn>
          <CheckBox />
        </HeaderColumn>
        {Object.entries(headers).map(([key, value]) => (
          <HeaderColumn key={key}>{value}</HeaderColumn>
        ))}
      </HeaderRow>
    );

    const bodyMarkup = bodyRows.map((data: object, index: number) => {
      const bodyRowList = Object.entries(data).map(([key, value]) => <Column key={key}>{value}</Column>);
      return (
        <Row key={index}>
          <Column>
            <CheckBox />
          </Column>
          {bodyRowList}
        </Row>
      );
    });

    return (
      <StyledDataTable>
        <Header>{headerMarkup}</Header>
        <Body>{bodyMarkup}</Body>
      </StyledDataTable>
    );
  }
}
