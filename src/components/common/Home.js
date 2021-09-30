import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import "../../css/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  const [styles, setStyles] = useState(null);
  const [client, setClient] = useState(null);

  const getStyles = async () => {
    const stylesArr = await axios({
      method: "get",
      url: "http://localhost:3002/style",
    });
    setStyles(stylesArr.data);
  };

  // clientId;
  // console.log(styles);

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <>
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
            Dashboard
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

        <div className="banner-page">
          <div className="side1">
            <h2>
              Introducing the New Revolution in Fashion -{" "}
              <span className="teg">StyloBug</span>{" "}
            </h2>
          </div>
          <div className="side2">
            {/* <img className="side2" src="\undraw_coolness_dtmq (1).png" alt="" /> */}

            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_sk5h1kfn.json"
              background="transparent"
              speed="1"
              // style="width: 300px; height: 300px;"
              hover
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="products">
          {styles
            ? styles.map((ele) => {
                return <Product key={ele._id} ele={ele} />;
              })
            : null}
        </div>
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
