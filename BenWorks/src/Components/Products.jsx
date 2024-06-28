import React from "react";
import pic from "../assets/test.jpg";
import buck from "../assets/Bucks.jpg";
import chair from "../assets/chair2.jpg";
import cutting from "../assets/Cuttingboard.jpg";

function Products() {
  return (
    <div className="ProductsContainer">
      <div className="product">
        <div className="pictureContainer">
          <img src={pic} alt="" />
        </div>
        <div className="productInfoContainer"></div>
      </div>
      <div className="product">
        <div className="pictureContainer">
          <img src={buck} alt="" />
        </div>
        <div className="productInfoContainer"></div>
      </div>
      <div className="product">
        <div className="pictureContainer">
          <img src={chair} alt="" />
        </div>
        <div className="productInfoContainer"></div>
      </div>
      {/* <div className="product">
        <div className="pictureContainer">
          <img src={cutting} alt="" />
        </div>
        <div className="productInfoContainer"></div>
      </div> */}
    </div>
  );
}

export default Products;
