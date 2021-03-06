import React, { useState } from "react";
import "../../css/header.css";
import { Link } from "react-router-dom";

export default function Header({ client }) {
  return (
    <div className="nav">
      <div className="container">
        {" "}
        <div title="404" className="titl">
          <Link to="/">
            <h1>Stylobug </h1>
          </Link>
        </div>
        <div className="items">
          <div className="item">
            {" "}
            <Link to="/size/add">
              <p>+ SIZE</p>{" "}
            </Link>
          </div>

          <div className="item">
            <Link to="/style/add">
              <p>+ STYLE</p>
            </Link>
          </div>
          <div className="item">
            <Link to="/sku/add/skuCode">
              <p>+ SKU</p>
            </Link>
          </div>
        </div>
      </div>

      {/* <ul className="container">
        <Link to="/">
          {" "}
          <div title="404" className="title">
            Stylobug
          </div>
        </Link>

        <li className="item">
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          {" "}
          <Link to="/register">Signup</Link>
        </li>
        <li className="item">
          {" "}
          <Link to="/addsize">+ SIZE</Link>
        </li>
        <li className="item">
          {" "}
          <Link to="/style/add">+ STYLE</Link>
        </li>
      </ul> */}
    </div>
  );
}
