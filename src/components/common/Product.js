import React from "react";
import { Link } from "react-router-dom";
import "../../css/Product.css";

export default function Product(props) {
  const { ele } = props;
  return (
    <div className="main-product-card">
      <Link to={`/style/edit/${ele._id}`}>
        <img src={ele.frontImageUrl} alt="" />
        <div className="details">
          <p className="stylecode">StyleCode : {ele.styleCode}</p>
          <p>Color: {ele.color}</p>
          <p>name: {ele.name}</p>
        </div>
      </Link>
    </div>
  );
}
