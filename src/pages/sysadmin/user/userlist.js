import React from "react";
import BTable from "react-bootstrap/Table";
import { useTable } from "react-table";

const UserList = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "FirstName", // accessor is the "key" in the data
      },
      {
        Header: "Last Name",
        accessor: "LastName",
      },
      {
        Header: "Primary Mobile",
        accessor: "PrimaryMobile",
      },
      {
        Header: "Secondary Mobile",
        accessor: "SecondaryMobile",
      },
      {
        Header: "Email",
        accessor: "Email",
      },
      {
        Header: "Login Name",
        accessor: "LoginName",
      },
    ],
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: props.data });

  // Render the UI for your table
  return (
    <div className="shadow rounded">
      <BTable
        striped
        bordered
        hover
        size="sm"
        className="m-0"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
    </div>
  );
};

export default UserList;
