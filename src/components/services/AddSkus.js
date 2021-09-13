import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { nameValidator, styleCodeValidator } from "../validators/validation";
import { Link } from "react-router-dom";
import "../../css/services/AddSku.css";

export default function AddSkus() {
  const params = useParams();

  const [styleCode, setStyleCode] = useState(null);
  const [styleCodeErr, setStyleCodeErr] = useState(null);
  const [frontImg, setFrontImg] = useState(null);
  const [backImg, setBackImg] = useState(null);
  const [zoomImg, setZoomImg] = useState(null);
  const [color, setColor] = useState(null);
  const [name, setName] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [noSuccess, setNoSuccess] = useState(null);
  const [style, setStyle] = useState(null);

  const getStyle = async () => {
    const style = await axios({
      method: "get",
      url: "http://localhost:3002/style/" + params.skuCode,
    });
    setStyle(style.data[0]);
  };

  useEffect(() => {
    getStyle();
  }, []);

  return (
    <div className="container2">
      <div className="head1">
        <h2>
          {" "}
          Add Sku For Style: <span>styleCode</span>
        </h2>
        <Link to="/">
          <p className="close">X</p>
        </Link>
      </div>

      <p>{noSuccess}</p>
      <div className="inputsss">
        <div className="side7">
          <div className="itemss">
            <label htmlFor="styleCode">Style Code: </label>
            <input
              type="text"
              id="styleCode"
              placeholder="Style Code"
              onChange={(e) => {
                if (
                  !styleCodeValidator(e.target.value) &&
                  e.target.value.length
                ) {
                  setStyleCodeErr("Invalid Style Code!!");
                  setStyleCode(null);
                } else setStyleCodeErr(null);
                setStyleCode(e.target.value);
              }}
            />
          </div>
          {styleCodeErr ? <p>{styleCodeErr}</p> : null}

          <div className="itemss">
            <label htmlFor="styleName">Name: </label>
            <input
              type="text"
              id="styleName"
              placeholder="Name"
              onChange={(e) => {
                if (e.target.value && !nameValidator(e.target.value)) {
                  setNameErr("Enter Valid Name");
                  setName(null);
                } else setNameErr(null);
                setName(e.target.value);
              }}
            />
          </div>
          {nameErr ? <p>{nameErr}</p> : null}
          <div className="itemss">
            <label htmlFor="styleName">Color: </label>
            <input
              type="text"
              id="styleColor"
              placeholder="Color"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="side8">
          <div className="itemss">
            <label htmlFor="frontImg">Front Image: </label>
            <input
              type="text"
              id="frontImg"
              placeholder="Front Image"
              onChange={(e) => setFrontImg(e.target.value)}
            />
          </div>

          <div className="itemss">
            <label htmlFor="backImg">Back Image: </label>
            <input
              type="text"
              id="backImg"
              placeholder="Back Image"
              onChange={(e) => setBackImg(e.target.value)}
            />
          </div>

          <div className="itemss">
            <label htmlFor="zoomImg">Zoom Image: </label>
            <input
              type="text"
              id="zoomImg"
              placeholder="Zoom Image"
              onChange={(e) => setZoomImg(e.target.value)}
            />
          </div>
          <button className="butt">Add Sku</button>
        </div>
      </div>
    </div>
  );
}
