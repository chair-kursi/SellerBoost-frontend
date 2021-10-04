import React, { useEffect, useState } from "react";
import "../../css/services/Dashboard.css";
import faker from "faker";
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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "0 auto",
    maxWidth: 1050,
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

function Dashboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dashboard, setDashboard] = useState([]);
  const [soldoutColor, setSoldoutColor] = useState(0);
  const [redColor, setRedColor] = useState(0);
  const [orangeColor, setOrangeColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [overGreenColor, setOverGreenColor] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const trafficColorCount = new Map();

  const getDashboard = async () => {
    const dashboard = await axios({
      method: "get",
      url: "http://localhost:3002/styleTraffic",
    });

    setDashboard(dashboard.data.data);
    let dashboardArr = dashboard.data.data;

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

  useEffect(() => {
    getDashboard();
  }, []);

  return (
    <div className="Dashboard__table">
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
            Inventory Dashboard
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
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>
                    StyleCode <TableSortLabel />
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
                </TableRow>
              </TableHead>
              <TableBody>
                {dashboard
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.styleCode}>
                      <TableCell>
                        <Typography className={classes.name}>
                          {row.styleCode}
                        </Typography>
                      </TableCell>
                      <TableCell>
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
                              (row.trafficActual === "SOLDOUT" && "#d61400") ||
                              (row.trafficActual === "RED" && "#ff8282") || //", "GREEN", "OVERGREEN"
                              (row.trafficActual === "ORANGE" && "orange") ||
                              (row.trafficActual === "GREEN" && "#00da25") ||
                              (row.trafficActual === "OVERGREEN" && "#009018"),
                          }}
                        >
                          {row.trafficActual}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[10, 45, 50, 100]}
                  component="div"
                  count={dashboard.length}
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
