import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Header from "../common/Header";
import "../../css/home.css";
export default function Home() {
  const [styles, setStyles] = useState(null);

  const getStyles = async () => {
    const stylesArr = await axios({
      method: "get",
      url: "http://localhost:3002/style",
    });
    setStyles(stylesArr.data);
  };

  useEffect(() => {
    getStyles();
  }, []);

  return (
    <div className="Home">
      <Header />
      <div className="banner-page">
        <div className="side1">
          <h2>
            Introducing the New Revolution in Fashion -{" "}
            <span className="teg">StyloBug</span>{" "}
          </h2>
        </div>
        <div className="side2">
          <img className="side2" src="\undraw_coolness_dtmq (1).png" alt="" />
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
