import React, { useState, useEffect } from "react";
import "../../css/services/OneClickCatlogUpdate.css";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
  TableSortLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    marginTop: 30,
  },
  tableContainer: {
    borderRadius: 15,

    maxWidth: 2000,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: "#11493e",
  },
  styleCode: {
    fontWeight: "bold",
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: "#11493e",
    textAlign: "center",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
    width: 97,
    textAlign: "center",
  },
}));

function OneClickCatlogUpdate() {
  const [userList, setUserList] = useState([]);
  const [next1, setNext1] = useState(false);
  const [next2, setNext2] = useState(false);
  const [company, setCompany] = useState(null);

  const [show, setShow] = useState(false);

  const [companyinCamelCase, setCompanyinCamelCase] = useState("amazon");

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dashboard, setDashboard] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const trafficColorCount = new Map();

  const getHealth = async () => {
    try {
      const health = await axios({
        method: "get",
        url: "http://15.206.171.9:3002/api/marketplaceHealth",
      });
      setUserList(health.data);
      console.log(health.data);
      // const healthMap = new Map();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getHealth();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3002/styleTraffic")
  //     .then((response) => response.json())
  //     .then((result) => setUserList(result.data))

  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div>
      <input type="checkbox" id="nav-toggle" />

      <div className="sidebarr">
        <div className="sidebar-brand">
          <h1>
            {" "}
            <span className="fab fa-asymmetrik"> </span>{" "}
            <span>SuprCommerce</span>
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/Home">
                <span className="fas fa-home"></span>
                <span>Home</span>
              </a>
            </li>
            {/* <li>
              <a href="/Onboarding">
                <span className="fas fa-stream"></span>
                <span>OnBoarding</span>
              </a>
            </li> */}

            <li>
              <a href="/Dashboard">
                <span className="fas fa-tachometer-alt"></span>
                <span>Inventory Dashboard </span>
              </a>
            </li>
            <li>
              <a href="/SetUp">
                <span className="fas fa-tools"></span>
                <span>Set Up</span>
              </a>
            </li>

            <li>
              <a href="/MarketPlaceHealth">
                <span className="fas fa-heartbeat"></span>
                <span>MarketPlace Health</span>
              </a>
            </li>
            <li>
              <a href="/BusinessHealth">
                <span className="fas fa-heartbeat"></span>
                <span>Business Health</span>
              </a>
            </li>

            <li>
              <a href="/DispatchHealth">
                <span className="fas fa-heartbeat"></span>
                <span>Dispatch Health</span>
              </a>
            </li>
            {/* <li>
              <a href="/OneClickCatlogUpdate">
                <span className="fas fa-upload"></span>

                <span>One Click Upload</span>
              </a>
            </li> */}

            <li>
              <a href="/MarketPlaceReconciliation">
                <span className="fas fa-hand-holding-usd"></span>

                <span>Reconciliation</span>
              </a>
            </li>
            <li>
              <a href="/Merchandising">
                <span className="fas fa-tshirt"></span>

                <span>Merchandising</span>
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
            One Click Upload
          </h2>

          <div className="search-wrapper">
            <span class="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
          </div>

          <div className="user-wrapper">
            <div className="user__wrapperImg">
              <img src="https://bit.ly/3bvT89p" alt="profile-img" />
            </div>
            <div className="info">
              <h4>Ayan Khan</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>

        <div className="tbles">
          {/* <div className="tbles__header">
            <h1>Select Multiple Styles</h1>
            <i class="far fa-hand-pointer"></i>
          </div> */}
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>
                    Select
                  </TableCell>

                  <TableCell className={classes.styleCode}>StyleCode</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.styleCode}>
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        {row.styleCode}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[10, 45, 50, 100]}
                  component="div"
                  count={userList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
        {/* <div className="tbtn1">
          <button className="butts" onClick={() => setNext1(!next1)}>
            NEXT <i class="fas fa-angle-double-right"></i>
          </button>
        </div> */}
        {/* {next1 ? ( */}
        <div className="ctn8">
          <div className="tbles__header1">
            <h1>Select One MarketPlace</h1>
            <i class="far fa-hand-pointer"></i>
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
        {/* ) : null} */}
        {/* 
        {company ? ( */}
        <>
          <div className="butta__container">
            <button
              className={`${company ? "butta" : "buttaDisabled"}`}
              // disabled={!company}
            >
              Download CSV{" "}
            </button>
          </div>
        </>
        {/* ) : null} */}
      </div>
    </div>
  );
}

export default OneClickCatlogUpdate;
