import React from "react";
import "../../css/services/BusinessHealth.css";
function BusinessHealth() {
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
            Buiness Health
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
        <div className="container123">
          <div className="picklist">
            <div className="picklistrow">
              <div className="picklistitem">
                <label htmlFor="date">Show Data for :</label>
                <input type="date" id="date" />
                <button className="repogen">Generate Report</button>
              </div>
              <div className="picklistitem">
                <label htmlFor="channel">Select Channels</label>
                <select name="channel" id="channel" placeholder="Amazon">
                  <option value="volvo">Amazon</option>
                  <option value="saab">Flipkart</option>
                  <option value="opel">Snapdeal</option>
                  <option value="audi">Myntra</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="cardsssss">
          <div className="card__container">
            <div class="cardes card-1s">
              <div className="cards_detail">
                <h3>Total Sales </h3>
                <p>
                  <i class="fas fa-rupee-sign"></i> 24,76,666.19{" "}
                </p>
              </div>
              <div className="cards_detail_sub">
                <h1>
                  Total Sales Unit <i class="fas fa-chevron-circle-right"></i>
                </h1>
                <p>3034</p>
              </div>
            </div>
          </div>
          <div className="card__container">
            <div class="cardes card-2s">
              <div className="cards_detail">
                <h3>Cancelled Invoice Amount</h3>
                <p>
                  <i class="fas fa-rupee-sign"></i> 150606.02{" "}
                </p>
              </div>
              <div className="cards_detail_sub">
                <h1>
                  Total Units <i class="fas fa-chevron-circle-right"></i>
                </h1>
                <p>181</p>
              </div>
            </div>
          </div>
          <div className="card__container">
            <div class="cardes card-3s">
              {" "}
              <div className="cards_detail">
                <h3>Return Invoice Amount </h3>
                <p>
                  <i class="fas fa-rupee-sign"></i> 2,12,484.00{" "}
                </p>
              </div>
              <div className="cards_detail_sub">
                <h1>
                  Total Units <i class="fas fa-chevron-circle-right"></i>
                </h1>
                <p>255 </p>
              </div>
            </div>
          </div>
          <div className="card__container">
            <div class="cardes card-4s">
              {" "}
              <div className="cards_detail">
                <h3>Net Sales </h3>
                <p>
                  <i class="fas fa-rupee-sign"></i> 17,26,051.17
                </p>
              </div>
              <div className="cards_detail_sub">
                <h1>Net Sales Unites</h1>
                <p>
                  2,169 <i class="fas fa-chevron-circle-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessHealth;
