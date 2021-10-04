import React, { useState, useEffect } from "react";
import faker from "faker";
import "../../css/services/MarketPlaceHealth.css";
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
    margin: "10px 10px",
    maxWidth: 2000,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: "#11493e",
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

function MarketPlaceHealth() {
  const [show, setShow] = useState(false);
  const [company, setCompany] = useState("Amazon");
  const [companyinCamelCase, setCompanyinCamelCase] = useState("amazon");
  const [userList, setUserList] = useState([]);
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
        url: "http://localhost:3002/api/marketplaceHealth",
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

  return (
    <div>
      <input type="checkbox" id="nav-toggle" />

      <div className="sidebarr">
        <div className="sidebar-brand">
          <h1>
            {" "}
            <span className="fab fa-asymmetrik"> </span>{" "}
            <span>SuperCommerce</span>
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
            MarketPlace Health
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

        <main>
          <div className="cards__title">
            <h1>
              Select one MarketPlace <i class="far fa-hand-pointer"></i>
            </h1>
          </div>
          <div className="cards">
            <div className="card-single">
              <div>
                <div className="card__desc">
                  <div className="desc__numbers">
                    <h1>500</h1>
                  </div>
                </div>

                <span className="tis">Fashion Alpha</span>
              </div>
              <div className="stylos">
                <span className="fab fa-asymmetrik"></span>
              </div>
            </div>
            <div
              className={`card-single ${
                company === "Amazon" ? "company" : ""
              } `}
              onClick={(event) => {
                if (company === "Amazon") {
                  setCompany(null);
                  setCompanyinCamelCase(null);
                } else {
                  setCompany("Amazon");
                  setCompanyinCamelCase("amazon");
                }
              }}
            >
              <div>
                <div className="card__desc">
                  <div className="desc__number">
                    <h1>50</h1>
                  </div>
                </div>

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
              className={`card-single ${
                company === "Flipkart" ? "company" : ""
              } `}
              onClick={(event) => {
                if (company === "Flipkart") {
                  setCompany(null);
                  setCompanyinCamelCase(null);
                } else {
                  setCompany("Flipkart");
                  setCompanyinCamelCase("flipkart");
                }
              }}
            >
              <div>
                <div className="card__desc">
                  <div className="desc__number">
                    <h1>20</h1>
                  </div>
                </div>

                <span className="ti">FlipKart</span>
              </div>
              <div className="stylo">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHhFT-UYA7mVnz1WVYHsrr0Z9nxaP4LtcKQ&usqp=CAU"
                  alt=""
                  className="stylo_img"
                />
                {/* <span className="fab fa-amazon"></span> */}
              </div>
            </div>
            <div
              className={`card-single ${
                company === "Snapdeal" ? "company" : ""
              } `}
              onClick={(event) => {
                if (company === "Snapdeal") {
                  setCompany(null);
                  setCompanyinCamelCase(null);
                } else {
                  setCompany("Snapdeal");
                  setCompanyinCamelCase("snapdeal");
                }
              }}
            >
              <div>
                <div className="card__desc">
                  <div className="desc__number">
                    <h1>10</h1>
                  </div>
                </div>

                <span className="ti">Snapdeal</span>
              </div>
              <div className="stylo">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="stylo_img"
                />
              </div>
            </div>
            <>
              <div
                className={`card-single ${
                  company === "Myntra" ? "company" : ""
                } `}
                onClick={(event) => {
                  if (company === "Myntra") {
                    setCompany(null);
                    setCompanyinCamelCase(null);
                  } else {
                    setCompany("Myntra");
                    setCompanyinCamelCase("myntraAppMp");
                  }
                }}
              >
                <div>
                  <div className="card__desc">
                    <div className="desc__number">
                      <h1>10</h1>
                    </div>
                  </div>

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
                c
                className={`card-single ${
                  company === "Ajio" ? "company" : ""
                } `}
                onClick={(event) => {
                  if (company === "Ajio") {
                    setCompany(null);
                    setCompanyinCamelCase(null);
                  } else {
                    setCompany("Ajio");
                    setCompanyinCamelCase("ajio");
                  }
                }}
              >
                <div>
                  <div className="card__desc">
                    <div className="desc__number">
                      <h1>10</h1>
                    </div>
                  </div>

                  <span className="ti">Ajio</span>
                </div>
                <div className="stylo">
                  <img
                    src="https://iconape.com/wp-content/files/bq/300911/png/ajio-logo.png"
                    alt=""
                    className="stylo_img"
                  />
                </div>
              </div>

              <div
                className={`card-single ${
                  company === "FirstCry" ? "company" : ""
                } `}
                onClick={(event) => {
                  if (company === "FirstCry") {
                    setCompany(null);
                    setCompanyinCamelCase(null);
                  } else {
                    setCompany("FirstCry");
                    setCompanyinCamelCase("firstCry");
                  }
                }}
              >
                <div>
                  <div className="card__desc">
                    <div className="desc__number">
                      <h1>10</h1>
                    </div>
                  </div>

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
                className={`card-single ${
                  company === "Nykaa Fashion" ? "company" : ""
                } `}
                onClick={() => {
                  if (company === "Nykaa Fashion") {
                    setCompany(null);
                    setCompanyinCamelCase(null);
                  } else {
                    setCompany("Nykaa Fashion");
                    setCompanyinCamelCase("nykaaFashion");
                  }
                }}
              >
                <div>
                  <div className="card__desc">
                    <div className="desc__number">
                      <h1>10</h1>
                    </div>
                  </div>

                  <span className="ti">Nykaa Fashion</span>
                </div>
                <div className="stylo">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="stylo_img"
                  />
                </div>
              </div>
            </>
          </div>
          <div className="cards__title1">
            <h1>Detailed View</h1>
          </div>
          {company ? (
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeaderCell}>
                      StyleCode
                    </TableCell>

                    <TableCell className={classes.tableHeaderCell}>
                      Rank
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Total Inventory
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      StyloBug
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      {company}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow key={row.styleCode}>
                        <TableCell>{row.styleCode}</TableCell>
                        <TableCell>{row.rank}</TableCell>

                        <TableCell>{row.totalInv}</TableCell>
                        <TableCell>{row.styloBug}</TableCell>
                        <TableCell>
                          <Typography
                            className={classes.status}
                            style={{
                              backgroundColor:
                                row[companyinCamelCase] != row.styloBug
                                  ? "#ff8282"
                                  : "#00da25",
                            }}
                          >
                            {row[companyinCamelCase]}
                          </Typography>
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
              <div className="butta__container">
                <button className="butta">Download CSV </button>
              </div>
            </TableContainer>
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default MarketPlaceHealth;
