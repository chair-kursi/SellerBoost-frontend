import React, { useState, useEffect } from "react";
import "../../css/services/SetUp.css";
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
import { Auth, onAuthStateChanged, handleSignOut } from "../auth/firebase";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import download from "js-file-download";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    marginTop: 30,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "15px 10px",
    maxWidth: 2000,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: "#11493e",
    padding: "16px",
  },
  tableRows: {
    padding: "17px",
  },
}));

function SetUp() {
  const classes = useStyles();
  const [csvSelected, setCsvSelected] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState("");
  const history = useHistory();

  const uploadCSV = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append("csvFile", csvSelected);
    setLoading("in Progress");
    axios
      .post("http://api.suprcommerce.com:3002/setUp", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLoading(res);
        console.log(loading);
        download(res.data, "error.csv");
        diffToast1();
      })
      .catch((err) => {
        diffToast2();
      });
  };
  const diffToast = () => {
    toast.warn("Please Select CSV File");
  };
  const diffToast1 = () => {
    toast.success("Successfuly Uploaded");
  };
  const diffToast2 = () => {
    toast.error("Something went Wrong");
  };

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user", user);
      }
    });
  }, []);
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
              <a href="/SetUp">
                <span className="fas fa-tools"></span>
                <span>SKU SetUp</span>
              </a>
            </li>

            <li>
              <a href="/Dashboard">
                <span className="fas fa-tachometer-alt"></span>
                <span>Inventory Dashboard </span>
              </a>
            </li>

            {/* <li>
              <a href="/MarketPlaceHealth">
                <span className="fas fa-heartbeat"></span>
                <span>MarketPlace Health</span>
              </a>
            </li>
            <li>
              <a href="/BusinessHealth">
                <span className="fas fa-chart-bar"></span>
                <span>Business Health</span>
              </a>
            </li>

            <li>
              <a href="/DispatchHealth">
                <span className="fas fa-shipping-fast"></span>
                <span>Dispatch Health</span>
              </a>
            </li> */}
            {/* <li>
        <a href="/OneClickCatlogUpdate">
          <span className="fas fa-upload"></span>

          <span>One Click Upload</span>
        </a>
      </li> */}

            {/* <li>
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
            </li> */}
            <li
              onClick={() => {
                if (user) {
                  handleSignOut();
                } else {
                  history.push("/signin");
                }
              }}
            >
              <a href={`${user ? "/" : "/signin"}`}>
                <span className="fas fa-sign-out-alt"></span>
                <span>{user ? "Sign-Out" : "Sign-in"}</span>
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
            SKU setup
          </h2>

          {/* <div className="search-wrapper">
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
          </div> */}
        </header>

        <div class="main-container">
          <div className="SetupContainer">
            <h1 className="homeSummary__title">
              <span>Setup Style/SKU</span>
            </h1>
          </div>
          <div className="tless">
            <div className="dwnCSV">
              <div className="csvInput">
                <input
                  type="file"
                  onChange={(event) => {
                    setCsvSelected(event.target.files[0]);
                  }}
                />
                <button onClick={csvSelected ? uploadCSV : diffToast}>
                  Upload File{" "}
                  <span>
                    <i class="fas fa-upload"></i>
                  </span>{" "}
                  &emsp;
                  {loading === "in Progress" ? (
                    <ReactBootStrap.Spinner
                      animation="border"
                      variant="warning"
                    />
                  ) : (
                    ""
                  )}
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </div>
              <button>
                <a href="\sku-template.csv" download className="downloadCSV">
                  Download Template
                </a>
                <span className="iconsss">
                  <i class="fas fa-arrow-circle-down"></i>
                </span>
              </button>
            </div>

            {/* <div className="Setup_info">
              <div className="card-singlee22">
                <div>
                  <div className="card__desc">
                    <div className="desc__numbers2">
                      <h3>28</h3>
                    </div>
                  </div>

                  <span className="tis">Total Rows</span>
                </div>
                <div className="stylos">
                  <span className="fas fa-tasks"></span>
                </div>
              </div>

              <div className="card-singlee33">
                <div>
                  <div className="card__desc">
                    <div className="desc__numbers33">
                      <h3>25</h3>
                    </div>
                  </div>

                  <span className="tis">Successful</span>
                </div>
                <div className="stylos">
                  <span className="fas fa-check"></span>
                </div>
              </div>
              <div className="card-singlee44">
                <div>
                  <div className="card__desc4">
                    <div className="desc__numbers44">
                      <h2>3</h2>
                    </div>
                  </div>

                  <span className="tis">Error</span>
                </div>
                <div className="stylos">
                  <span className="fas fa-exclamation-circle"></span>
                </div>
              </div>
            </div> */}
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeaderCell}>
                      Column Name
                    </TableCell>

                    <TableCell className={classes.tableHeaderCell}>
                      Description
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Required
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableRows}>SKU</TableCell>
                    <TableCell className={classes.tableRows}>SKU</TableCell>
                    <TableCell
                      className={classes.tableRows}
                      style={{
                        color: "green",
                        fontSize: "20px",
                      }}
                    >
                      <i class="fas fa-check-circle"></i>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className={classes.tableRows}>Style</TableCell>
                    <TableCell className={classes.tableRows}>Style</TableCell>
                    <TableCell
                      className={classes.tableRows}
                      style={{ color: "green", fontSize: "20px" }}
                    >
                      <i class="fas fa-check-circle"></i>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>Size</TableCell>
                    <TableCell className={classes.tableRows}>Size</TableCell>
                    <TableCell
                      className={classes.tableRows}
                      style={{ color: "green", fontSize: "20px" }}
                    >
                      <i class="fas fa-check-circle"></i>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>Barcode</TableCell>
                    <TableCell className={classes.tableRows}>Barcode</TableCell>
                    <TableCell className={classes.tableRows}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      Front Image Url
                    </TableCell>
                    <TableCell className={classes.tableRows}>
                      Front Image Url
                    </TableCell>
                    <TableCell className={classes.tableRows}></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUp;
