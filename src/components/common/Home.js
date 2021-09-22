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
    <div className="Home">
      <div className="header">
        <div title="404" className="titl">
          <Link to="/">
            <h1>Stylobug </h1>
          </Link>
        </div>
        <div className="input">
          <SearchIcon />
          <input type="text" placeholder="Search Style" />
        </div>
      </div>

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
  );
}
