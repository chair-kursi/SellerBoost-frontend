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
    margin: "10px 10px",
    maxWidth: 1050,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },

  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

let USERS = [],
  STATUSES = ["Active", "Pending", "Blocked"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.companyName(),
    joinDate: faker.date.past().toLocaleDateString("en-US"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}
console.log(USERS);

function Dashboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
                    Traffic Actual
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {USERS.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Typography className={classes.name}>
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="body2">
                        {row.company}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.joinDate}</TableCell>
                    <TableCell>
                      <Typography
                        className={classes.status}
                        style={{
                          backgroundColor:
                            (row.status === "Active" && "green") ||
                            (row.status === "Pending" && "blue") ||
                            (row.status === "Blocked" && "orange"),
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15]}
                  component="div"
                  count={USERS.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
