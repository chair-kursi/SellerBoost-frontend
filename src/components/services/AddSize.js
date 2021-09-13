import axios from "axios";
import React, { useState } from "react";
import { sizeCodeValidator, sizeNameValidator } from "../validators/validation";
import "../../css/services/Addsize.css";
import { Link } from "react-router-dom";

export default function AddSize() {
  const [sizeCode, setSizeCode] = useState(null);
  const [sizeCodeErr, setSizeCodeErr] = useState(null);
  const [sizeName, setSizeName] = useState(null);
  const [sizeNameErr, setSizeNameErr] = useState(null);
  const [noSuccess, setNoSuccess] = useState(null);
  const [success, setSuccess] = useState(null);

  const saveNewSize = async () => {
    setNoSuccess(null);
    setSuccess(null);
    if (!sizeName || !sizeCode) {
      setNoSuccess("Please Fill all fields!!..");
      return;
    }
    let data = {
      sizeCode: sizeCode,
      sizeName: sizeName,
    };
    const savedSize = await axios({
      method: "post",
      url: "http://localhost:3002/size/add",
    });
    if (savedSize.data) setSuccess("Successfully added the size");
  };

  return (
    <div className="container3">
      <div className="head2">
        <h2>
          {" "}
          <span>Add</span> Size
        </h2>
        <Link to="/">
          <p className="close">X</p>
        </Link>
      </div>

      <p>{noSuccess}</p>
      <p>{success}</p>
      <div className="container3_items">
        <div className="container3_item">
          <label htmlFor="">Size Code</label>
          <input
            type="text"
            placeholder="Size Code"
            onChange={(e) => {
              setSizeCode(e.target.value);
              if (!sizeCodeValidator(e.target.value) && e.target.value) {
                setSizeCode(null);
                setSizeCodeErr("Enter Valid Sizecode");
              } else setSizeCodeErr(null);
            }}
          />
        </div>
        <p>{sizeCodeErr}</p>
        <div className="container3_item">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setSizeName(e.target.value);
              if (!sizeNameValidator(e.target.value) && e.target.value) {
                setSizeName(null);
                setSizeNameErr("Enter Valid size name");
              } else setSizeNameErr(null);
            }}
          />
        </div>
        <p>{sizeNameErr}</p>
        {/* ORDER CANNOT BE A INPUT FROM USER */}
        <button className="butt" onClick={saveNewSize}>
          Add Size
        </button>
      </div>
    </div>
  );
}
