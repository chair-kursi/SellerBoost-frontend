import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/home.css";
import { Link, useHistory } from "react-router-dom";
import { Auth, onAuthStateChanged, handleSignOut } from "../auth/firebase";

axios.defaults.withCredentials = true;

export default function Home() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [homeData, sethomeData] = useState("");

  const homee = async () => {
    axios
      .get("http://api.suprcommerce.com:3002/summaryForHome", {
        withCredentials: true,
      })
      .then((res) => {
        sethomeData(res.data.data);
      });
  };

  useEffect(() => {
    homee();
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
        toast.success("Welcome To the SuprCommerce");
        console.log("user ascfa", user);
      }
    });
  }, []);

  return (
    <>
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
                <span>SKU setUp</span>
              </a>
            </li>

            <li>
              <Link to="/Dashboard">
                <span className="fas fa-tachometer-alt"></span>
                <span>Inventory Dashboard </span>
              </Link>
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
      {/* {user ? diffToast3() : ""} */}
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
      <div className="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <span class="fas fa-bars"></span>
            </label>
            Home
          </h2>

          {/* <div className="search-wrapper">
            <span class="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
          </div> */}
          {/* <div className="user-wrapper">
            <div className="user__wrapperImg">
              <img src="https://bit.ly/3bvT89p" alt="profile-img" />
            </div>
            <div className="info">
              <h4>Ayan Khan</h4>
              <small>Super Admin</small>
            </div>
          </div> */}
        </header>

        <div className="Home_container">
          <h1 className="homeSummary__title">
            <span>Summary</span>
          </h1>
          <div className="homeCard_container">
            <h1 className="homeCard__title">
              Inventory DashBoard{" "}
              <span className="fas fa-tachometer-alt"></span>
            </h1>
            <div className="cardssss">
              <div className="card-singlee1">
                <div>
                  <div className="card__desc">
                    <div className="desc__numbers1">
                      <h1>
                        {homeData.length === 0
                          ? "0"
                          : homeData[0].dashboard.soldout}
                      </h1>
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
                      <h1>
                        {" "}
                        {homeData.length === 0
                          ? "0"
                          : homeData[0].dashboard.red}
                      </h1>
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
                      <h1>
                        {homeData.length === 0
                          ? "0"
                          : homeData[0].dashboard.orange}
                      </h1>
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
                      <h1>
                        {homeData.length === 0
                          ? "0"
                          : homeData[0].dashboard.green}
                      </h1>
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
                      <h1>
                        {homeData.length === 0
                          ? "0"
                          : homeData[0].dashboard.overgreen}
                      </h1>
                    </div>
                  </div>

                  <span className="tis">OverGreen</span>
                </div>
                <div className="stylos">
                  <span className="fas fa-people-carry"></span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="homeCard_container">
            <h1 className="homeCard__title">
              MarketPlace Health <span className="fas fa-heartbeat"></span>
            </h1>
            <div className="cardssss">
              <div className="card-singleee1">
                <div>
                  <div className="card__desce">
                    <div className="desc__numbers1e">
                      <h1>0</h1>
                    </div>
                  </div>

                  <span className="tis">Amazon</span>
                </div>
                <div className="stylos">
                  <span>
                    <img
                      src="https://thumbs.dreamstime.com/b/astana-kazakhstan-july-amazon-icon-logo-vector-symbol-198642038.jpg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="card-singleee4">
                <div>
                  <div className="card__desce">
                    <div className="desc__numbers4e">
                      <h1>3</h1>
                    </div>
                  </div>

                  <span className="tis">Flipkart</span>
                </div>
                <div className="stylos">
                  <span>
                    <img
                      src="https://www.hindi.aamtech.net/wp-content/uploads/2017/04/Flipkart-Logo.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>

              <div className="card-singleee2">
                <div>
                  <div className="card__desce">
                    <div className="desc__numbers2e">
                      <h1>1</h1>
                    </div>
                  </div>

                  <span className="tis">Myntra</span>
                </div>
                <div className="stylos">
                  <span>
                    <img
                      src="https://iconape.com/wp-content/png_logo_vector/myntra-logo.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>

              <div className="card-singleee3">
                <div>
                  <div className="card__desce">
                    <div className="desc__numbers3e">
                      <h1>0</h1>
                    </div>
                  </div>

                  <span className="tis">Ajio</span>
                </div>
                <div className="stylos">
                  <span>
                    <img
                      src="https://iconape.com/wp-content/files/bq/300911/png/ajio-logo.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="homeCard_container">
            <h1 className="homeCard__title">
              Business Health <span className="fas fa-chart-bar"></span>
            </h1>
            <div class="cardsssss">
              <div className="card__container">
                <div class="cardess card-1s">
                  <div className="cards_detailss">
                    <h3>Total Sales </h3>
                    <p>
                      <i class="fas fa-rupee-sign"></i> 24,76,666.19{" "}
                    </p>
                  </div>
                  <div className="cards_detail_subs">
                    <h1>
                      Total Sales Unit{" "}
                      <i class="fas fa-chevron-circle-right"></i>
                    </h1>
                    <p>3034</p>
                  </div>
                </div>
              </div>
              <div className="card__container">
                <div class="cardess card-2s">
                  <div className="cards_detailss">
                    <h3>Cancelled Invoice Amount</h3>
                    <p>
                      <i class="fas fa-rupee-sign"></i> 150606.02{" "}
                    </p>
                  </div>
                  <div className="cards_detail_subs">
                    <h1>
                      Total Units <i class="fas fa-chevron-circle-right"></i>
                    </h1>
                    <p>181</p>
                  </div>
                </div>
              </div>
              <div className="card__container">
                <div class="cardess card-3s">
                  {" "}
                  <div className="cards_detailss">
                    <h3>Return Invoice Amount </h3>
                    <p>
                      <i class="fas fa-rupee-sign"></i> 2,12,484.00{" "}
                    </p>
                  </div>
                  <div className="cards_detail_subs">
                    <h1>
                      Total Units <i class="fas fa-chevron-circle-right"></i>
                    </h1>
                    <p>255 </p>
                  </div>
                </div>
              </div>
              <div className="card__container">
                <div class="cardess card-4s">
                  {" "}
                  <div className="cards_detailss">
                    <h3>Net Sales </h3>
                    <p>
                      <i class="fas fa-rupee-sign"></i> 17,26,051.17
                    </p>
                  </div>
                  <div className="cards_detail_subs">
                    <h1>Net Sales Unites</h1>
                    <p>
                      2,169 <i class="fas fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="homeCard_container">
            <h1 className="homeCard__title11">
              Dispatch Health <span className="fas fa-shipping-fast"></span>
            </h1>
            <div className="dispatch__container">
              <div className="detail_num33">
                <h3>SLA Breach (TAT =today)</h3>
              </div>
              <div className="detail_num22">
                <h3>Priority Order not Dispatch Yet</h3>
              </div>
            </div>
          </div> */}

          {/* <div className="homeCard_container">
            <h1 className="homeCard__title1">
              Setup Error <span className="fas fa-exclamation-triangle"></span>
            </h1>
            <div className="cardssss">
              <div className="SKUcontainer">
                <div className="SKUtotalContainer">
                  <div className="SKUtotal">
                    <h1>553</h1>
                    <p>Total SKU</p>
                  </div>
                  <div className="SKUtotalIcon">
                    <span>
                      <i class="fas fa-people-carry"></i>
                    </span>
                  </div>
                </div>

                <div className="SKUtotalContainer">
                  <div className="SKUtotal">
                    <h1>123</h1>
                    <p>SKU error</p>
                  </div>
                  <div className="SKUtotalIcon">
                    <span>
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="products">
          <div className="banner-page">
            <div className="side1">
              <h2>
                Introducing the New Revolution in Fashion -{" "}
                <span className="teg">SuperCommerce</span>{" "}
              </h2>
            </div>
            <div className="side2">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json"
                background="transparent"
                speed="1"
                hover
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>

          {styles
            ? styles.map((ele) => {
                return <Product key={ele._id} ele={ele} />;
              })
            : null}
        </div> */}
      </div>
    </>

    // <div className="Home">
    //   <div className="header">
    //     <div title="404" className="titl">
    //       <Link to="/">
    //         <h1>Stylobug </h1>
    //       </Link>
    //     </div>
    //     <div className="input">
    //       <SearchIcon />
    //       <input type="text" placeholder="Search Style" />
    //     </div>
    //   </div>

    //   <div className="banner-page">
    //     <div className="side1">
    //       <h2>
    //         Introducing the New Revolution in Fashion -{" "}
    //         <span className="teg">StyloBug</span>{" "}
    //       </h2>
    //     </div>
    //     <div className="side2">
    //       {/* <img className="side2" src="\undraw_coolness_dtmq (1).png" alt="" /> */}

    //       <lottie-player
    //         src="https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json"
    //         background="transparent"
    //         speed="1"
    //         // style="width: 300px; height: 300px;"
    //         hover
    //         loop
    //         autoplay
    //       ></lottie-player>
    //     </div>
    //   </div>
    //   <div className="products">
    //     {styles
    //       ? styles.map((ele) => {
    //           return <Product key={ele._id} ele={ele} />;
    //         })
    //       : null}
    //   </div>
    // </div>
  );
}
