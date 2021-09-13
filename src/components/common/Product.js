import React from "react";
import { Link } from "react-router-dom";
import "../../css/Product.css";

export default function Product(props) {
  const { ele } = props;
  return (
    <div className="main-product-card">
      <Link to={`/style/edit/${ele._id}`}>
        <div className="container4">
          <div className="row">
            <div className="rt-profile-card">
              <img
                className="full-width img-fluid"
                src={ele.frontImageUrl}
                alt=""
              />
              <div class="rt-profile-body">
                <div class="rt-profile-name">
                  {ele.styleCode}
                  <br />
                  {ele.name}
                </div>
                <div class="rt-profile-text">{ele.name}</div>
              </div>
            </div>
          </div>
        </div>
        {/* <img src={ele.frontImageUrl} alt="" />
        <div className="details">
          <p className="stylecode">StyleCode : {ele.styleCode}</p>
          <p>Color: {ele.color}</p>
          <p>name: {ele.name}</p>
          {console.log(ele)}
        </div> */}
      </Link>
    </div>
  );
}
