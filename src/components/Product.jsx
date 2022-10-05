import React from "react";
import { ReactComponent as Note } from "../images/icon-music.svg";
import Button from "./Button";

function Product() {
  return (
    <div className="Product">
      <Note />
      <h1> Annual Plan</h1>
      <p> $59.99/year</p>
      <Button text={"change"} />
    </div>
  );
}

export default Product;
