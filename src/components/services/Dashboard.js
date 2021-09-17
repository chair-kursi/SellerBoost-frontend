import React, { useEffect, useState } from "react";
import "../../css/services/Dashboard.css";
import Header from "../common/Header";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, {
  textFilter,
  numberFilter,
  selectFilter,
  multiSelectFilter,
  customFilter,
} from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";

function Dashboard() {
  const [userList, setUserList] = useState([]);
  const { ExportCSVButton } = CSVExport;
  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>
          Export to CSV
        </button>
      </div>
    );
  };

  const columns = [
    // { dataField: "id", text: "Id" },
    {
      dataField: "styleCode",
      text: "StyleCode",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "trafficActual",
      text: "Traffic Actual",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "currentInv",
      text: "Current INV",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "salesNumber",
      text: "Sales Number",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "salesRank",
      text: "Sales Rank",
      sort: true,
      filter: textFilter(),
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerpage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerpage);
    },
    onSizePerPageChange: function (page, sizePerpage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerpage);
    },
  });

  useEffect(() => {
    fetch("http://localhost:3002/api/styletraffic")
      .then((response) => response.json())
      .then((result) => setUserList(result))

      .catch((error) => console.log(error));

    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((result) => setUserList(result))

    //     .catch((error) => console.log(error));
  }, []);
  console.log(userList);

  return (
    <div className="Dashboard__table">
      <Header />
      <ToolkitProvider
        bootstrap4
        keyField="styleCode"
        data={userList}
        columns={columns}
        exportCSV
      >
        {(props) => (
          <React.Fragment>
            <MyExportCSV {...props.csvProps} />

            <BootstrapTable
              //   bootstrap4
              //   keyField="id"
              //   columns={columns}
              //   data={userList}
              pagination={pagination}
              filter={filterFactory()}
              {...props.baseProps}
            />
          </React.Fragment>
        )}
      </ToolkitProvider>

      {/* <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        {userList && userList.length > 0
          ? userList.map((usr) => (
              <tr>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
              </tr>
            ))
          : "Loading"}
      </table> */}
    </div>
  );
}

export default Dashboard;
