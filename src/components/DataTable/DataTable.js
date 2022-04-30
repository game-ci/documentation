// Inspired from https://github.com/pester/docs/blob/master/src/components/PesterDataTable/PesterDataTable.js
import React from "react";
import {useTable, useSortBy} from "react-table";
import "./style.css";

// create a default prop getter
const defaultPropGetter = () => ({});

const DataTable = ({
                     columns,
                     data,
                     getHeaderProps = defaultPropGetter,
                     getColumnProps = defaultPropGetter
                   }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              // Return an array of prop objects and react-table will merge them appropriately
              {...column.getHeaderProps([
                {
                  className: column.className
                },
                getHeaderProps(column),
                getColumnProps(column),
                column.getSortByToggleProps()
              ])}
            >
              {column.render("Header")}
              <span>{column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}</span>
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td
                  {...cell.getCellProps([
                    {
                      className: cell.column.className,
                      style: cell.column.style
                    },
                    getColumnProps(cell.column)
                  ])}
                >
                  {cell.render("Cell")}
                </td>
              );
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default DataTable;
