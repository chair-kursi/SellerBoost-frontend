import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/services/addStyle.css";
import { nameValidator, styleCodeValidator } from "../validators/validation";
import { Link, useParams } from "react-router-dom";

export default function EditStyle() {
  const params = useParams();

  const [styleCode, setStyleCode] = useState(null);
  const [styleCodeErr, setStyleCodeErr] = useState(null);
  const [frontImageUrl, setFrontImageUrl] = useState(null);
  const [backImageUrl, setBackImageUrl] = useState(null);
  const [zoomImageUrl, setZoomImageUrl] = useState(null);
  const [color, setColor] = useState(null);
  const [name, setName] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [noSuccess, setNoSuccess] = useState(null);
  const [style, setStyle] = useState(null);

  const updateStyle = async () => {
    setSuccess(null);
    setNoSuccess(null);
    if (!frontImageUrl || !backImageUrl || !zoomImageUrl || !color || !name) {
      setNoSuccess("Please fill all details to proceed.");
      return;
    }
    if (
      frontImageUrl === style.frontImageUrl &&
      backImageUrl === style.backImageUrl &&
      zoomImageUrl === style.zoomImageUrl &&
      color === style.color &&
      name === style.name
    ) {
      setNoSuccess("Everything is already Updated");
      return;
    }
    let data = {
      frontImageUrl: frontImageUrl,
      backImageUrl: backImageUrl,
      zoomImageUrl: zoomImageUrl,
      color: color,
      name: name,
    };
    const updatedData = await axios({
      method: "patch",
      url: "http://15.206.171.9:3002/style/update/" + params.styleCode,
      data: data,
    });

    if (updatedData.status) setSuccess("Style Updated Successfully.");
  };

  const getStyle = async () => {
    const stylesArr = await axios({
      method: "get",
      url: "http://15.206.171.9:3002/style/" + params.styleCode,
    });
    setStyle(stylesArr.data[0]);
    setFrontImageUrl(stylesArr.data[0].frontImageUrl);
    setBackImageUrl(stylesArr.data[0].backImageUrl);
    setZoomImageUrl(stylesArr.data[0].zoomImageUrl);
    setColor(stylesArr.data[0].color);
    setName(stylesArr.data[0].name);
  };

  useEffect(() => {
    getStyle();
  }, []);

  return style ? (
    <div className="container2">
      <div className="head1">
        <h2>
          {" "}
          <span>Edit</span> Style
        </h2>
        <Link to="/">
          <p className="close">X</p>
        </Link>
      </div>
      <p>{noSuccess}</p>
      {success ? (
        <p>
          {" "}
          {success} <Link to={`/style/add/${success._id}`}>Edit SKUs?</Link>
        </p>
      ) : null}
      <div className="inputsss">
        <div className="side7">
          <div className="itemss">
            <label htmlFor="styleCode">Style Code: </label>
            <input
              type="text"
              id="styleCode"
              autoComplete="off"
              placeholder="Style Code"
              value={style.styleCode}
              disabled={true}
            />
          </div>
          {styleCodeErr ? <p>{styleCodeErr}</p> : null}

          <div className="itemss">
            <label htmlFor="styleName">Name: </label>
            <input
              type="text"
              id="styleName"
              autoComplete="off"
              value={name}
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
              autoComplete="off"
              placeholder="Color"
              value={color}
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
              autoComplete="off"
              placeholder="Front Image"
              value={frontImageUrl}
              onChange={(e) => setFrontImageUrl(e.target.value)}
            />
          </div>

          <div className="itemss">
            <label htmlFor="backImg">Back Image: </label>
            <input
              type="text"
              id="backImg"
              autoComplete="off"
              placeholder="Back Image"
              value={backImageUrl}
              onChange={(e) => setBackImageUrl(e.target.value)}
            />
          </div>

          <div className="itemss">
            <label htmlFor="zoomImg">Zoom Image: </label>
            <input
              type="text"
              id="zoomImg"
              autoComplete="off"
              placeholder="Zoom Image"
              value={zoomImageUrl}
              onChange={(e) => setZoomImageUrl(e.target.value)}
            />
          </div>
          <button className="butt" onClick={updateStyle}>
            Update
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
