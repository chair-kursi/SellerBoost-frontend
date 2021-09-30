import React, { useEffect, useState } from "react";
import "../../css/services/Dashboard.css";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import cellEditFactory from "react-bootstrap-table2-editor";
import filterFactory, {
  textFilter,
  numberFilter,
  selectFilter,
  multiSelectFilter,
  customFilter,
} from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";
import axios from "axios";

function Dashboard() {
  const [userList, setUserList] = useState([]);
  const [csv, setCsv] = useState();

  const { ExportCSVButton } = CSVExport;
  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div className="tableheader">
        <div className="export">
          <button className="butt" onClick={handleClick}>
            Export to CSV
          </button>
        </div>
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
      editCellStyle: {
        backgroundColor: "#20B2AA",
      },
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

  useEffect(async () => {
    const styleTraffic = await axios({
      method: "get",
      url: "http://localhost:3002/styleTraffic",
    });

    setUserList(styleTraffic.data.data);
    console.log(styleTraffic.data.data);
  }, []);

  // console.log(userList);

  let formData = new FormData();

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("csvFile", e.target.files[0]);
      console.log(formData);
    }
  };
  // const SubmitData = () => {
  //   axios
  //     .post("http://localhost:3002/api/skuInventory", formData)
  //     .then((res) => {
  //       console.log(res);
  //       setUserList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="Dashboard__table">
      <input type="checkbox" id="nav-toggle" />

      <div className="sidebarr">
        <div className="sidebar-brand">
          <h1>
            {" "}
            <span className="fab fa-asymmetrik"> </span>{" "}
            <span>SellerBoost</span>
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/">
                <span className="fas fa-home"></span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/Onboarding">
                <span className="fas fa-stream"></span>
                <span>OnBoarding</span>
              </a>
            </li>

            <li>
              <a href="/Dashboard">
                <span className="fas fa-tachometer-alt"></span>
                <span>Inventory Dashboard </span>
              </a>
            </li>

            <li>
              <a href="/MarketPlaceHealth">
                <span className="fas fa-heartbeat"></span>
                <span>MarketPlace Health</span>
              </a>
            </li>
            <li>
              <a href="/OneClickCatlogUpdate">
                <span className="fas fa-upload"></span>

                <span>One Click Upload</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="fas fa-hands-helping"></span>
                <span>Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-key"></span>
                <span>Password</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-sign-out-alt"></span>
                <span>Sign-out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <span class="fas fa-bars"></span>
            </label>
            Inventory Dashboard
          </h2>

          <div className="search-wrapper">
            <span class="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
          </div>

          <div className="user-wrapper">
            <img
              src="https://bit.ly/3bvT89p"
              width="40px"
              height="40px"
              alt="profile-img"
            />
            <div class="">
              <h4>Ayan Khan</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>

        <div className="cardsss">
          <div className="card-singlee1">
            <div>
              <div className="card__desc">
                <div className="desc__numbers1">
                  <h1>5</h1>
                </div>
              </div>

              <span className="tis">Sold Out</span>
            </div>
            <div className="stylos">
              <span className="fas fa-broom"></span>
            </div>
          </div>
          <div className="card-singlee4">
            <div>
              <div className="card__desc">
                <div className="desc__numbers4">
                  <h1>5</h1>
                </div>
              </div>

              <span className="tis">Red</span>
            </div>
            <div className="stylos">
              <span className="fas fa-exclamation-circle"></span>
            </div>
          </div>

          <div className="card-singlee2">
            <div>
              <div className="card__desc">
                <div className="desc__numbers2">
                  <h1>7</h1>
                </div>
              </div>

              <span className="tis">Orange</span>
            </div>
            <div className="stylos">
              <span className="fas fa-tasks"></span>
            </div>
          </div>

          <div className="card-singlee3">
            <div>
              <div className="card__desc">
                <div className="desc__numbers3">
                  <h1>9</h1>
                </div>
              </div>

              <span className="tis">Green</span>
            </div>
            <div className="stylos">
              <span className="fas fa-check"></span>
            </div>
          </div>
        </div>
        <div className="tble">
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
                  cellEdit={cellEditFactory({ mode: "click" })}
                  pagination={pagination}
                  filter={filterFactory()}
                  {...props.baseProps}
                />
              </React.Fragment>
            )}
          </ToolkitProvider>
        </div>
        {csv}
        {/* <div className="export">
          <button className="butt" onClick={handleClick}>
            Export to CSV
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
