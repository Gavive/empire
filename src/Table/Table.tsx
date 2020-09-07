import React, { Component } from "react";
import styled from "styled-components";
import { Props } from "./Table.types";

const TableContainer = styled.table`
  width: 100%;
  display: table;
  color: ${props => props.theme.color};
  border-spacing: 0;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  display: table-header-group;
`;

const TableHeadRow = styled.tr`
`;

const TableHeadCell = styled.th`
  font-weight: 600;
  line-height: 1.5rem;
  display: table-cell;
  padding: 16px;
  font-size: 0.875rem;
  text-align: left;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.43;
  border-bottom: 1px solid rgba(81, 81, 81, 1);
  letter-spacing: 0.01071em;
  vertical-align: inherit;
`;

const TableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const TableBodyRow = styled.tr<Partial<Props<any>>>`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;
  :hover {
    background: ${props => {
      if (props.showRowHoverBackground) {
        switch(props.theme && props.theme.name) {
          case "dark":
            return "rgba(255, 255, 255, 0.08)";

          case "light":
            return "rgba(0, 0, 0, 0.08)";
        }
      }

      return "none";
    }}
  }
`;

const TableBodyCell = styled.th`
  display: table-cell;
  padding: 16px;
  font-size: 0.875rem;
  text-align: left;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  border-bottom: 1px solid rgba(81, 81, 81, 1);
  letter-spacing: 0.01071em;
  vertical-align: inherit;
`;

TableBodyRow.defaultProps = {
  showRowHoverBackground: true
};

export default class Table<T> extends Component<Props<T>> {
  constructor(props: Props<T>) {
    super(props);
  }

  private _renderTableHead() {
    return (
      <TableHead>
        <TableHeadRow>
          {
            this.props.columns?.map(col => (
              <TableHeadCell key={col.key}>{col.label}</TableHeadCell>
            ))
          }
        </TableHeadRow>
      </TableHead>
    );
  }

  private _renderTableBody() {
    return (
      <TableBody>
        {
          this.props.data.map((row: T, index: number) => (
            <TableBodyRow key={index} showRowHoverBackground={this.props.showRowHoverBackground}>
              {
                this.props.columns?.map(col => (
                  <TableBodyCell key={`${index}-${col.key}`}>
                    {(row as any)[col.key]}
                  </TableBodyCell>
                ))
              }
            </TableBodyRow>
          ))
        }
      </TableBody>
    );
  }

  public render(): React.ReactNode {
    return (
      <TableContainer>
        {this._renderTableHead()}
        {this._renderTableBody()}
      </TableContainer>
    );
  }
}
