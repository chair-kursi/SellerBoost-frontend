import React, { useState, useEffect } from "react";
import "../../css/services/OneClickCatlogUpdate.css";
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

function OneClickCatlogUpdate() {
  const [userList, setUserList] = useState([]);
  const [next1, setNext1] = useState(false);
  const [next2, setNext2] = useState(false);
  const [company, setCompany] = useState(null);
  const columns = [
    {
      dataField: "styleCode",
      text: "StyleCode",
      sort: "true",
      filter: textFilter(),
    },
  ];
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
  };
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
    fetch("http://localhost:3002/styleTraffic")
      .then((response) => response.json())
      .then((result) => setUserList(result.data))

      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
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
            Dashboard
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

        <div className="tbles">
          <div className="tbles__header">
            <h1>Select Multiple Styles</h1>
            <i class="far fa-check-square"></i>
          </div>
          <BootstrapTable
            bootstrap4
            keyField="styleCode"
            columns={columns}
            selectRow={selectRow}
            data={userList}
            pagination={pagination}
            filter={filterFactory()}
          />
        </div>
        <div className="tbtn1">
          <button className="butts" onClick={() => setNext1(!next1)}>
            NEXT <i class="fas fa-angle-double-right"></i>
          </button>
        </div>
        {next1 ? (
          <div className="ctn8">
            <div className="tbles__header">
              <h1>Select One Company</h1>
              <i class="far fa-check-square"></i>
            </div>
            <div className="cardss">
              <div
                className={`card-singles ${
                  company === "Amazon" ? "company" : ""
                } `}
                onClick={(event) => {
                  if (company === "Amazon") {
                    setCompany(null);
                  } else {
                    setCompany("Amazon");
                  }
                  setNext2(!next2);
                }}
              >
                <div>
                  <span className="ti">Amazon</span>
                </div>
                <div className="stylo">
                  <img
                    src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                    alt=""
                    className="stylo_img"
                  />
                </div>
              </div>

              <div
                className={`card-singles ${
                  company === "myntra" ? "company" : ""
                } `}
                onClick={(event) => {
                  if (company === "myntra") {
                    setCompany(null);
                  } else {
                    setCompany("myntra");
                  }
                  setNext2(!next2);
                }}
              >
                <div>
                  <span className="ti">Myntra</span>
                </div>
                <div className="stylo">
                  <img
                    src="https://iconape.com/wp-content/png_logo_vector/myntra-logo.png"
                    alt=""
                    className="stylo_img"
                  />
                </div>
              </div>

              <div
                className={`card-singles ${
                  company === "FirstCry" ? "company" : ""
                } `}
                onClick={(event) => {
                  if (company === "FirstCry") {
                    setCompany(null);
                  } else {
                    setCompany("FirstCry");
                  }
                  setNext2(!next2);
                }}
              >
                <div>
                  <span className="ti">FirstCry</span>
                </div>
                <div className="stylo">
                  <img
                    src="https://iconape.com/wp-content/files/mw/61687/png/firstcry-1.png"
                    alt=""
                    className="stylo_img"
                  />
                </div>
              </div>
              <div
                className={`card-singles ${
                  company === "Nykaa" ? "company" : ""
                } `}
                onClick={(event) => {
                  if (company === "Nykaa") {
                    setCompany(null);
                  } else {
                    setCompany("Nykaa");
                  }
                  setNext2(!next2);
                }}
              >
                <div>
                  <span className="ti">Nykaa Fashion</span>
                </div>
                <div className="stylo">
                  <img
                    src="https://i1.wp.com/www.indiaretailing.com/wp-content/uploads/2020/10/nykaa-fashion.png?fit=681%2C400&ssl=1"
                    alt=""
                    className="stylo_img"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {next2 ? (
          <>
            <div className="butta__container">
              <button className="butta">Download CSV </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default OneClickCatlogUpdate;
