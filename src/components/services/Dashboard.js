import React, { useEffect, useState, useRef } from "react";
import "../../css/services/Dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import { Auth, onAuthStateChanged, handleSignOut } from "../auth/firebase";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  TableFooter,
  MenuItem,
  Menu,
  IconButton,
  TableSortLabel,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import download from "js-file-download";

axios.defaults.withCredentials = true;
const options = ["All", "Live", "Launching", "Disabled"];
const skuOptions = ["Smooth Inventory", "Raw Inventory"];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1000,
  },
  tableContainer: {
    borderRadius: 15,
    display: "flex",
    maxWidth: 2000,
    marginRight: 20,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    backgroundColor: "#11493e",
    width: "124px",
    padding: "20px 5px",
  },

  tableHeaderCell2: {
    fontWeight: "bold",
    backgroundColor: theme.palette.success.dark,
    color: "#605600",
    backgroundColor: "#ffbc77",
  },

  tableCell2: {
    // fontWeight: "bold",
    // color: "#605600",
    backgroundColor: "#fffbcc",
    padding: "12px",
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

function Dashboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dashboard, setDashboard] = useState([]);
  const [soldoutColor, setSoldoutColor] = useState(0);
  const [redColor, setRedColor] = useState(0);
  const [orangeColor, setOrangeColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [overGreenColor, setOverGreenColor] = useState(0);
  const [showSkuTraffic, setShowSkuTraffic] = useState(-1);
  const [skuTraffic, setSkuTraffic] = useState([]);
  const [collapseStatus, setCollapseStatus] = useState(0);
  const [statusFilter, setStatusFilter] = useState("Live");
  const [skuFilter, setSkuFilter] = useState("Smooth Inventory");
  const [collapseStatusSku, setCollapseStatusSku] = useState(false);
  const [csvSelected1, setCsvSelected1] = useState("");
  const [csvSelected2, setCsvSelected2] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState("");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("stylecode");
  const [datePicker, setDatePicker] = useState();
  const [datePicked, setDatePicked] = useState();
  const [handleClick2, setHandleClick2] = useState();
  const [completed, setCompleted] = useState(true);
  const [stylecode, setStylecode] = useState();
  const [patchresponse, setPatchresponse] = useState("NA");
  const [checkstylecode, setCheckstylecode] = useState();
  const [complete, setComplete] = useState();

  const diffToast = () => {
    toast.warn("Please Select CSV File");
  };
  const diffToast1 = () => {
    toast.success("Successfuly Uploaded");
  };
  const diffToast2 = () => {
    toast.error("Something went Wrong");
  };
  const diffToast3 = () => {
    toast.error("Date Successfully Updated");
  };
  const history = useHistory();

  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const uploadCSV = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    setLoading("in Progress");
    formData.append("skuSales", csvSelected1);
    formData.append("skuInventory", csvSelected2);

    axios
      .post("http://api.suprcommerce.com:3002/dashboardUploads", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLoading(res);
        download(res.data, "error.csv");

        diffToast1();
      })
      .catch((err) => {
        console.log(err);
        diffToast2();
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const trafficColorCount = new Map();

  const getDashboard = async () => {
    const dashboard = await axios.get(
      //  "http://15.206.171.9:3002/styleTraffic",
      "http://api.suprcommerce.com:3002/styleTraffic",
      { withCredentials: true }
    );

    if (dashboard.data && dashboard.data.data) {
      setDashboard(dashboard.data.data);
      //setting colors
      setSoldoutColor(
        dashboard.data.data.filter((row) => {
          return row.status === statusFilter && row.trafficActual === "SOLDOUT";
        }).length
      );
      setRedColor(
        dashboard.data.data.filter((row) => {
          return row.status === statusFilter && row.trafficActual === "RED";
        }).length
      );
      setOrangeColor(
        dashboard.data.data.filter((row) => {
          return row.status === statusFilter && row.trafficActual === "ORANGE";
        }).length
      );
      setGreenColor(
        dashboard.data.data.filter((row) => {
          return row.status === statusFilter && row.trafficActual === "GREEN";
        }).length
      );
      setOverGreenColor(
        dashboard.data.data.filter((row) => {
          return (
            row.status === statusFilter && row.trafficActual === "OVERGREEN"
          );
        }).length
      );
    }
  };

  const setColorCount = (statusFilter) => {
    let dashboardArr = [];
    if (statusFilter === "All") dashboardArr = dashboard;
    else
      dashboardArr = dashboard.filter((row) => {
        return row.status === statusFilter;
      });
    console.log(dashboardArr);

    for (let i = 0; i < dashboardArr.length; i++) {
      let color = dashboardArr[i].trafficActual,
        prevColorCount = trafficColorCount.get(color);
      if (!prevColorCount) prevColorCount = 0;

      trafficColorCount.set(color, prevColorCount + 1);
    }
    const defaultTrafficColors = [
      "SOLDOUT",
      "RED",
      "ORANGE",
      "GREEN",
      "OVERGREEN",
    ];

    setSoldoutColor(trafficColorCount.get(defaultTrafficColors[0]) || 0);
    setRedColor(trafficColorCount.get(defaultTrafficColors[1]) || 0);
    setOrangeColor(trafficColorCount.get(defaultTrafficColors[2]) || 0);
    setGreenColor(trafficColorCount.get(defaultTrafficColors[3]) || 0);
    setOverGreenColor(trafficColorCount.get(defaultTrafficColors[4]) || 0);
  };

  // SKU Traffic get API Call

  const getSkuTraffic = async () => {
    const skuTraffic = await axios.get(
      "http://api.suprcommerce.com:3002/skuTraffic",
      {
        withCredentials: true,
      }
    );
    setSkuTraffic(skuTraffic.data.data);
    console.log(skuTraffic.data.data, "data");
  };

  const PatchSkuTraffic = async () => {
    await axios
      .patch("http://api.suprcommerce.com:3002/styleTraffic", {
        withCredentials: true,
        date: `${datePicked}`,
        status: "NA",
        styleCode: `${stylecode}`,
      })
      .then((res) => {
        planStatusMap.set(res.data.data.styleCode, res.data.data.planStatus);
        setPatchresponse(res.data.data.planStatus);
        setCheckstylecode(res.data.data.styleCode);
      });
  };

  const handleClick = (event) => {
    setCollapseStatus(event.currentTarget);
  };

  const handleClose = (e) => {
    if (!e.target.textContent) {
      setStatusFilter(statusFilter);
      setColorCount(statusFilter);
    } else {
      setStatusFilter(e.target.textContent);
      setColorCount(e.target.textContent);
    }
    setCollapseStatus(null);
  };

  const handleClickSku = (event) => {
    setCollapseStatusSku(event.currentTarget);
  };

  const handleCloseSku = (e) => {
    if (!e.target.textContent) {
      setSkuFilter(skuFilter);
    } else {
      setSkuFilter(e.target.textContent);
    }
    setCollapseStatusSku(null);
  };

  const ITEM_HEIGHT = 48;

  useEffect(() => {
    getDashboard();
    getSkuTraffic();

    onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user", user);
      }
    });
  }, []);
  const planStatusMap = new Map();
  const setPlanStatusMap = (styleCode, planStatus) => {
    planStatusMap.set(styleCode, planStatus);
  };

  return (
    <div className="Dashboard__table">
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
                } else history.push("/signin");
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
            Inventory Dashboard
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

        <div className="homeCard_container11">
          <div className="uploadShowmore">
            <h1 className="homeCard__title11">
              Upload <span className="fas fa-upload"></span>
            </h1>
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <>
                  Show Less{" "}
                  <span>
                    <i class="fas fa-angle-up"></i>
                  </span>
                </>
              ) : (
                <>
                  Show More{" "}
                  <span>
                    <i class="fas fa-angle-down"></i>{" "}
                  </span>
                </>
              )}
            </button>
          </div>
          {open ? (
            <>
              <div className="dispatch__container1">
                <label htmlFor="">
                  Inventory <span className="fas fa-tachometer-alt"></span>
                </label>

                <div className="dispatch__containerInput">
                  {/* <input type="text" placeholder="Enter URL" />
                  <span className="dispatch_containerOR">OR</span> */}
                  <input
                    type="file"
                    onChange={(event) => {
                      setCsvSelected2(event.target.files[0]);
                    }}
                  />
                </div>
                <button className="template">
                  <a
                    href="\inventory-template.csv"
                    download
                    className="downloadCSV"
                  >
                    Download Template
                  </a>
                  <span className="iconss">
                    <i class="fas fa-arrow-circle-down"></i>
                  </span>
                </button>
              </div>

              <div className="dispatch__container1">
                <label htmlFor="">
                  Sales <span className="fas fa-percent"></span>
                </label>

                <div className="dispatch__containerInput1">
                  {/* <input type="text" placeholder="Enter URL" />
                  <span className="dispatch_containerOR">OR</span> */}

                  <input
                    type="file"
                    onChange={(event) => {
                      setCsvSelected1(event.target.files[0]);
                    }}
                  />
                </div>
                <button className="template">
                  <a
                    href="\sales-template (3).csv"
                    download
                    className="downloadCSV"
                  >
                    Download Template
                  </a>
                  <span className="iconss">
                    <i class="fas fa-arrow-circle-down"></i>
                  </span>
                </button>
              </div>

              <button
                className="DispatchContainerButton"
                onClick={csvSelected1 && csvSelected2 ? uploadCSV : diffToast}
              >
                {" "}
                Submit &emsp;
                {loading === "in Progress" ? (
                  <ReactBootStrap.Spinner
                    animation="border"
                    variant="warning"
                  />
                ) : (
                  ""
                )}
              </button>
            </>
          ) : null}
        </div>
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

        <div className="cardsss">
          <div className="card-singlee1">
            <div>
              <div className="card__desc">
                <div className="desc__numbers1">
                  <h1>{soldoutColor}</h1>
                </div>
              </div>

              <span className="tis">SoldOut</span>
            </div>
            <div className="stylos">
              <span className="fas fa-broom"></span>
            </div>
          </div>
          <div className="card-singlee4">
            <div>
              <div className="card__desc">
                <div className="desc__numbers4">
                  <h1>{redColor}</h1>
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
                  <h1>{orangeColor}</h1>
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
                  <h1>{greenColor}</h1>
                </div>
              </div>

              <span className="tis">Green</span>
            </div>
            <div className="stylos">
              <span className="fas fa-check"></span>
            </div>
          </div>

          <div className="card-singlee5">
            <div>
              <div className="card__desc">
                <div className="desc__numbers5">
                  <h1>{overGreenColor}</h1>
                </div>
              </div>

              <span className="tis">OverGreen</span>
            </div>
            <div className="stylos">
              <span className="fas fa-people-carry"></span>
            </div>
          </div>
        </div>

        <div className="tble">
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead href="#subtable">
                <TableRow>
                  <TableCell
                    className={classes.tableHeaderCell}
                    style={{ textAlign: "center" }}
                    key="stylecode"
                  >
                    <TableSortLabel
                      style={{ color: "white" }}
                      active={valueToOrderBy === "stylecode"}
                      direction={
                        valueToOrderBy === "stylecode" ? orderDirection : "asc"
                      }
                      // onClick={createSortHandler("stylecode")}
                    >
                      StyleCode
                    </TableSortLabel>
                  </TableCell>

                  <TableCell className={classes.tableHeaderCell}>
                    Status
                    <IconButton
                      aria-label="More"
                      style={{ color: "white" }}
                      aria-owns={collapseStatus ? "long-menu" : null}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={collapseStatus}
                      open={collapseStatus}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: 200,
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          value={option}
                          selected={option === statusFilter}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Current INV
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Sales Number
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Sales Rank
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Traffic Actual
                  </TableCell>
                  <TableCell
                    className={classes.tableHeaderCell}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Plan Status
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* onClick={() => {
                              scroll.scrollToTop();
                            }} */}
              <TableBody>
                {dashboard &&
                  dashboard.length &&
                  dashboard
                    .filter((row) => {
                      if (
                        (statusFilter != "All" &&
                          row.status === statusFilter) ||
                        statusFilter === "All"
                      )
                        return row;
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, idx) => (
                      <>
                        {setPlanStatusMap(row.styleCode, row.planStatus)}

                        {/* {setPatchresponse(row.planStatus)} */}
                        <TableRow key={row.styleCode}>
                          <TableCell
                            className={classes.tableHeaderCell4}
                            style={{ textAlign: "center" }}
                            onClick={() => {
                              setStylecode(row.styleCode);
                              if (showSkuTraffic != page * rowsPerPage + idx)
                                setShowSkuTraffic(page * rowsPerPage + idx);
                              else setShowSkuTraffic(-1);
                            }}
                          >
                            <Typography
                              className={classes.name}
                              style={{ cursor: "pointer" }}
                            >
                              {row.styleCode}
                            </Typography>
                          </TableCell>

                          <TableCell>{row.status}</TableCell>
                          <TableCell
                            style={{
                              padding: "10px",
                            }}
                          >
                            <Typography
                              variant="body2"
                              style={{
                                textAlign: "center",
                              }}
                            >
                              {row.currentInv}
                            </Typography>
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                            }}
                          >
                            {row.salesNumber}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                            }}
                          >
                            {row.salesRank}
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={classes.status}
                              style={{
                                backgroundColor:
                                  (row.trafficActual === "SOLDOUT" &&
                                    "#d61400") ||
                                  (row.trafficActual === "RED" && "#ff8282") ||
                                  (row.trafficActual === "ORANGE" &&
                                    "orange") ||
                                  (row.trafficActual === "GREEN" &&
                                    "#00da25") ||
                                  (row.trafficActual === "OVERGREEN" &&
                                    "#009018"),
                              }}
                            >
                              {row.trafficActual}
                            </Typography>
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                            }}
                          >
                            {row.styleCode === checkstylecode ? (
                              <>
                                {/* {completed ? (
                                  <>
                                    <div className="progressContainer">
                                      <p className="progressText">
                                        {patchresponse}
                                      </p>{" "}
                                      <span className="hashss">/</span>
                                      <button
                                        className="progressTextComplete"
                                        onClick={() => {
                                          setCompleted(false);
                                        }}
                                      >
                                        Mark Complete{" "}
                                        <i class="fas fa-hand-pointer"></i>
                                      </button>
                                    </div>
                                    <p className="ExpiryDetails">
                                      Expires in 45 Days
                                    </p>
                                  </>
                                ) : (
                                  <p className="progressText2">
                                    Completed {console.log(row.planStatus)}
                                    <i class="fas fa-check-circle"></i>
                                  </p>
                                )} */}
                              </>
                            ) : planStatusMap.get(row.styleCode) !== "NA" ? (
                              planStatusMap.get(row.styleCode) ===
                              "In Progress" ? (
                                <>
                                  <div className="progressContainer">
                                    <p className="progressText">
                                      {/* {console.log(
                                        row.styleCode,
                                        planStatusMap.get(row.styleCode)
                                      )} */}

                                      {planStatusMap.get(row.styleCode)}
                                    </p>{" "}
                                    <span className="hashss">/</span>
                                    <button
                                      className="progressTextComplete"
                                      onClick={() => {
                                        PatchSkuTraffic();
                                        setComplete("Completed");
                                        setPlanStatusMap(
                                          row.styleCode,
                                          complete
                                        );
                                        {
                                          console.log(
                                            planStatusMap.get(row.styleCode)
                                          );
                                        }
                                      }}
                                    >
                                      Mark Complete{" "}
                                      <i class="fas fa-hand-pointer"></i>
                                    </button>
                                  </div>
                                  <p className="ExpiryDetails">
                                    Expires in 45 Days
                                  </p>
                                </>
                              ) : planStatusMap.get(row.styleCode) ===
                                "Completed" ? (
                                <p className="progressText2">
                                  Completed {console.log(row.planStatus)}
                                  <i class="fas fa-check-circle"></i>
                                </p>
                              ) : null
                            ) : (
                              <button
                                className="SetPlan"
                                onClick={() => {
                                  setDatePicker(true);
                                }}
                              >
                                {console.log(row.styleCode, row.planStatus)}
                                Set Plan
                              </button>
                            )}
                            {console.log(row.planStatus)}
                          </TableCell>
                        </TableRow>

                        {showSkuTraffic === page * rowsPerPage + idx ? (
                          <TableRow>
                            <TableCell colSpan={7}>
                              <TableContainer>
                                <section id="subtable">
                                  {datePicker ? (
                                    <>
                                      <div className="datepicker__container">
                                        <div className="datepicker__label">
                                          Please Select Date{" "}
                                          <i class="far fa-calendar-alt"></i>
                                        </div>
                                        <div className="date__items">
                                          <div className="date__item1">
                                            <h5>Date</h5>
                                            <input
                                              type="date"
                                              onChange={(e) =>
                                                setDatePicked(e.target.value)
                                              }
                                            />
                                          </div>
                                          <div className="date__item2">
                                            <button
                                              onClick={() => {
                                                PatchSkuTraffic();
                                                setDatePicker(false);
                                                // setHandleClick2(datePicked);
                                                // PatchSkuTraffic();
                                                // if (patchdata) {
                                                //   PatchSkuTraffic();
                                                // }
                                              }}
                                            >
                                              Submit
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                  <Table
                                    className={classes.table}
                                    aria-label="simple table"
                                  >
                                    <TableHead>
                                      <TableRow>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          SizeCode
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          Inventory
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          Sale
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          Day Inventory
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          Traffic
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          Recommended Inventory
                                          <br /> (30 Days)
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          Recommended Inventory
                                          <br /> (60 Days)
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          Recommended Inventory
                                          <br /> (90 Days)
                                        </TableCell>
                                        <TableCell
                                          className={classes.tableHeaderCell2}
                                        >
                                          <IconButton
                                            aria-label="More-sku"
                                            style={{ color: "#605600" }}
                                            aria-owns={
                                              collapseStatusSku
                                                ? "long-menu-sku"
                                                : null
                                            }
                                            aria-haspopup="true"
                                            onClick={handleClickSku}
                                          >
                                            <MoreVertIcon />
                                          </IconButton>
                                          <Menu
                                            id="long-menu-sku"
                                            anchorEl={collapseStatusSku}
                                            open={collapseStatusSku}
                                            onClose={handleCloseSku}
                                            PaperProps={{
                                              style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: 200,
                                              },
                                            }}
                                          >
                                            {skuOptions.map((option) => (
                                              <MenuItem
                                                key={option}
                                                value={option}
                                                selected={option === skuFilter}
                                                onClick={handleCloseSku}
                                              >
                                                {option}
                                              </MenuItem>
                                            ))}
                                          </Menu>
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    {skuTraffic
                                      .filter((sku) => {
                                        return sku.styleCode === row.styleCode;
                                      })
                                      .map((skuRow) => {
                                        return (
                                          <TableRow
                                            className={classes.tableRow1}
                                          >
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              {skuRow.sizeCode}
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              {skuRow.inventory}
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              {skuRow.totalSales}
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              {skuRow.dayInventory}
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              <Typography
                                                className={classes.status}
                                                style={{
                                                  backgroundColor:
                                                    (skuRow.trafficColor ===
                                                      "SOLDOUT" &&
                                                      "#d61400") ||
                                                    (skuRow.trafficColor ===
                                                      "RED" &&
                                                      "#ff8282") ||
                                                    (skuRow.trafficColor ===
                                                      "ORANGE" &&
                                                      "orange") ||
                                                    (skuRow.trafficColor ===
                                                      "GREEN" &&
                                                      "#00da25") ||
                                                    (skuRow.trafficColor ===
                                                      "OVERGREEN" &&
                                                      "#009018"),
                                                }}
                                              >
                                                {skuRow.trafficColor}
                                              </Typography>
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              {skuFilter === skuOptions[1]
                                                ? skuRow.suggestedInventory1
                                                : skuRow.suggestedSmoothInventory1}
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              {skuFilter === skuOptions[1]
                                                ? skuRow.suggestedInventory2
                                                : skuRow.suggestedSmoothInventory2}
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                              style={{
                                                textAlign: "center",
                                              }}
                                            >
                                              {skuFilter === skuOptions[1]
                                                ? skuRow.suggestedInventory3
                                                : skuRow.suggestedSmoothInventory3}
                                            </TableCell>
                                            <TableCell
                                              className={classes.tableCell2}
                                            ></TableCell>
                                          </TableRow>
                                        );
                                      })}
                                  </Table>
                                </section>
                              </TableContainer>
                            </TableCell>
                            {/* </Collapse>  */}
                          </TableRow>
                        ) : null}
                      </>
                    ))}
              </TableBody>
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[10, 45, 50, 100]}
                  component="div"
                  count={
                    dashboard &&
                    dashboard.length &&
                    dashboard.filter((row) => {
                      return (
                        row.status === statusFilter || statusFilter === "All"
                      );
                    }).length
                  }
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableFooter>
            </Table>
            {/* <div className="butta__container">
              <button className="butta">Download CSV </button>
            </div> */}
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
