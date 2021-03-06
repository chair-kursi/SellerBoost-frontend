import axios from "axios";
import React, { useState } from "react";
import "../../css/services/addStyle.css";
import {
  nameValidator,
  styleCodeValidator,
  urlValidator,
} from "../validators/validation";
import { Link } from "react-router-dom";

export default function AddStyle() {
  const [styleCode, setStyleCode] = useState(null);
  const [frontImageUrl, setFrontImageUrl] = useState(null);
  const [backImageUrl, setBackImageUrl] = useState(null);
  const [zoomImageUrl, setZoomImageUrl] = useState(null);
  const [color, setColor] = useState(null);
  const [name, setName] = useState(null);
  const [hasSize, setHasSize] = useState(null);
  const [success, setSuccess] = useState(null);

  //ERROR VARIABLES
  const [styleCodeErr, setStyleCodeErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [noSuccess, setNoSuccess] = useState(null);
  const [frontImageUrlErr, setFrontImageUrlErr] = useState(null);
  const [backImageUrlErr, setBackImageUrlErr] = useState(null);
  const [zoomImageUrlErr, setZoomImageUrlErr] = useState(null);

  const saveNewStyle = async () => {
    setSuccess(null);
    setNoSuccess(null);
    if (
      !styleCode ||
      !frontImageUrl ||
      !backImageUrl ||
      !zoomImageUrl ||
      !color ||
      !name ||
      !hasSize
    ) {
      setNoSuccess("Please fill all details to proceed.");
      return;
    }
    let data = {
      styleCode: styleCode,
      frontImageUrl: frontImageUrl,
      backImageUrl: backImageUrl,
      zoomImageUrl: zoomImageUrl,
      color: color,
      name: name,
      hasSize: hasSize,
    };
    const savedData = await axios({
      method: "post",
      url: "http://15.206.171.9:3002/style/add",
      data: data,
    });
    if (savedData.data) {
      setSuccess(savedData.data);
    }
  };

  return (
    <div className="container1">
      <div className="head">
        <h2>
          {" "}
          <span>Add</span> Style To Fashion
        </h2>
        <Link to="/Onboarding">
          <p className="close">X</p>
        </Link>
      </div>
      <p>{noSuccess}</p>
      {success ? (
        <p>
          New Style Added Successfully.{" "}
          <Link to={`/style/add/${success._id}`}>Add SKUs</Link>
        </p>
      ) : null}

      <div className="inputs">
        <div className="itemss">
          <label htmlFor="styleCode">Style Code: </label>
          <input
            type="text"
            id="styleCode"
            placeholder="Style Code"
            onChange={(e) => {
              setStyleCode(e.target.value);
              if (
                !styleCodeValidator(e.target.value) &&
                e.target.value.length
              ) {
                setStyleCodeErr("Invalid Style Code!!");
                setStyleCode(null);
              } else setStyleCodeErr(null);
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
              setName(e.target.value);
              if (e.target.value && !nameValidator(e.target.value)) {
                setNameErr("Enter Valid Name");
                setName(null);
              } else setNameErr(null);
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

        <div className="itemss">
          <label htmlFor="frontImageUrl">Front Image: </label>
          <input
            type="text"
            id="frontImageUrl"
            placeholder="Front Image"
            onChange={(e) => {
              setBackImageUrl(e.target.value);
              if (!urlValidator(e.target.value) && e.target.value) {
                setFrontImageUrlErr("Enter Valid Url");
                setBackImageUrl(null);
              } else setFrontImageUrlErr(null);
            }}
          />
        </div>
        {frontImageUrlErr ? <p>{frontImageUrlErr}</p> : null}

        <div className="itemss">
          <label htmlFor="backImageUrl">Back Image: </label>
          <input
            type="text"
            id="backImageUrl"
            placeholder="Back Image"
            onChange={(e) => {
              setFrontImageUrl(e.target.value);
              if (!urlValidator(e.target.value) && e.target.value) {
                setBackImageUrlErr("Enter Valid Url");
                setFrontImageUrl(null);
              } else setBackImageUrlErr(null);
            }}
          />
        </div>
        {backImageUrlErr ? <p>{backImageUrlErr}</p> : null}

        <div className="itemss">
          <label htmlFor="zoomImageUrl">Zoom Image: </label>
          <input
            type="text"
            id="zoomImageUrl"
            placeholder="Zoom Image"
            onChange={(e) => {
              setZoomImageUrl(e.target.value);
              if (!urlValidator(e.target.value) && e.target.value) {
                setZoomImageUrlErr("Enter Valid Url");
                setZoomImageUrl(null);
              } else setZoomImageUrlErr(null);
            }}
          />
        </div>
        {zoomImageUrlErr ? <p>{zoomImageUrlErr}</p> : null}
        <div className="itemss">
          <label htmlFor="hasSize">Has Size: </label>
          <input
            type="text"
            id="hasSize"
            placeholder="Has Size (T/F)"
            onChange={(e) => setHasSize(e.target.value)}
          />
        </div>

        <button className="butt" onClick={saveNewStyle}>
          Add Style
        </button>
      </div>
    </div>
  );
}
