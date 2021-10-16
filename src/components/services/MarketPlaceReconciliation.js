import React from "react";
import "../../css/services/MarketPlaceReconciliation.css";

function MarketPlaceReconciliation() {
  return (
    <div>
      {" "}
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
            Reconciliation
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

        <div class="main-container">
          <div class="heading">
            <h1 class="heading__title">Market Place Reconciliation</h1>
            <img
              src="https://cdn4.iconfinder.com/data/icons/under-construction/512/coming_soon-256.png"
              alt=""
            />
          </div>
          <div class="cardssss">
            <div class="card card-1">
              <div className="card__logo">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/label-price/54/16-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Selling Price Reconciliation</p>
              </div>
            </div>
            <div class="card card-2">
              <div className="card__logo">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/digital-marketing-250/64/07-Commission-256.png
                    "
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Commission Charges</p>
              </div>
            </div>
            <div class="card card-3">
              <div className="card__logo">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/business-1114/55/18-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Payment Gateway Charges</p>
              </div>
            </div>
            <div class="card card-4">
              <div className="card__logo">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/investing-navy-volume-2/64/Return_on_Investment-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Return Reconciliation</p>
              </div>
            </div>
            <div class="card card-5">
              <div className="card__logo">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-10/33/package_return-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>Return / Shipping Charges</p>
              </div>
            </div>
            <div class="card card-1">
              <div className="card__logo">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/finance-and-politics-1-mix/168/gst_paid_audit_save_exemption-256.png"
                  alt=""
                />
              </div>
              <div className="card__description">
                <p>GST Reconciliation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlaceReconciliation;
