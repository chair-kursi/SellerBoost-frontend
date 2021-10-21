import React, { useState } from "react";
import "../../css/services/DispatchHealth.css";
import { makeStyles } from "@material-ui/core/styles";
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
    padding: "16px",
  },
  tableRows: {
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

function DispatchHealth() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
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
                <span className="fas fa-chart-bar"></span>
                <span>Business Health</span>
              </a>
            </li>

            <li>
              <a href="/DispatchHealth">
                <span className="fas fa-shipping-fast"></span>
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
            Dispatch Health
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
        <div class="headingss">
          <h1 class="heading__title">Dispatch Health</h1>
          <img
            src="https://cdn4.iconfinder.com/data/icons/under-construction/512/coming_soon-256.png"
            alt=""
          />
        </div>
        <div className="Dispatch_container">
          <div className="header123">
            <div className="CutOff">
              <h3>CutOff</h3> <i class="fas fa-stopwatch"></i>
              <p>10:00 AM</p>
            </div>
            <div className="Priority_toggle">
              <h3>Priority Toggle</h3>

              <div class="button r" id="button-6">
                <input type="checkbox" class="checkbox" />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
          </div>
          <div className="tles">
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeaderCell}>
                      Channel
                    </TableCell>

                    <TableCell className={classes.tableHeaderCell}>
                      Created
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Processing
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      Dispatch
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      Amazon_IN
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      CLOUDTAIL_NEW
                    </TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      FIRSTCRY_MARKET_PLACE
                    </TableCell>
                    <TableCell className={classes.tableRows}>4</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      MYNTRAPPMP
                    </TableCell>
                    <TableCell className={classes.tableRows}>99</TableCell>
                    <TableCell className={classes.tableRows}>33</TableCell>
                    <TableCell className={classes.tableRows}>110</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      NYKAA_FASHION
                    </TableCell>
                    <TableCell className={classes.tableRows}>8</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>9</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div className="detail_container">
            <div className="detail_num1">
              <h3>Still in Created State</h3>
              <div className="detail_filter">
                <h5>Apply Filter</h5>
                <label class="switch">
                  <input type="radio" name="toggle" />
                  <div>
                    <span></span>
                  </div>
                </label>
              </div>
            </div>

            <div className="detail_num2">
              <h3>Priority Order not Dispatch Yet</h3>
              <div className="detail_filter">
                <h5>Apply Filter</h5>
                <label class="switch">
                  <input type="radio" name="toggle" />
                  <div>
                    <span></span>
                  </div>
                </label>
              </div>
            </div>

            <div className="detail_num3">
              <h3>SLA Breach (TAT =today)</h3>
              <div className="detail_filter">
                <h5>Apply Filter</h5>
                <label class="switch">
                  <input type="radio" name="toggle" />
                  <div>
                    <span></span>
                  </div>
                </label>
              </div>
            </div>

            <div className="detail_num4">
              <h3>Show All</h3>
              <div className="detail_filter">
                <h5>Apply Filter</h5>
                <label class="switch">
                  <input type="radio" name="toggle" />
                  <div>
                    <span></span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="tles">
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeaderCell}>
                      Channel
                    </TableCell>

                    <TableCell className={classes.tableHeaderCell}>
                      Picklist
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      StyleCode
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      02-03Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      03-04Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      04-05Y
                    </TableCell>

                    <TableCell className={classes.tableHeaderCell}>
                      06-07Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      07-08Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      08-09Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      09-10Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      11-12Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      13-14Y
                    </TableCell>
                    <TableCell className={classes.tableHeaderCell}>
                      15-16Y
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      Amazon_IN
                    </TableCell>
                    <TableCell className={classes.tableRows}>PK1507</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000172
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      Amazon_IN
                    </TableCell>
                    <TableCell className={classes.tableRows}>PK1507</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000127
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      Amazon_IN
                    </TableCell>
                    <TableCell className={classes.tableRows}>PK1507</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000332
                    </TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      FIRSTCRY
                    </TableCell>
                    <TableCell className={classes.tableRows}>FI-NA</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-0000032
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      FIRSTCRY
                    </TableCell>
                    <TableCell className={classes.tableRows}>FI-NA</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000179
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      FIRSTCRY
                    </TableCell>
                    <TableCell className={classes.tableRows}>FI-NA</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000388
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      MYNTRAPPMP
                    </TableCell>
                    <TableCell className={classes.tableRows}>MY-NA</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000078
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      MYNTRAPPMP
                    </TableCell>
                    <TableCell className={classes.tableRows}>MY-NA</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000127
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>2</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>2</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableRows}>
                      MYNTRAPPMP
                    </TableCell>
                    <TableCell className={classes.tableRows}>MY-NA</TableCell>
                    <TableCell className={classes.tableRows}>
                      SB-000172
                    </TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>1</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
                    <TableCell className={classes.tableRows}>0</TableCell>
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

export default DispatchHealth;
