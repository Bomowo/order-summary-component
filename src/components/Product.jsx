import React from "react";
import { ReactComponent as Note } from "../images/icon-music.svg";
import Button from "./Button";

function Product() {
  return (
    <div className="row Product">
      <Note className="col-2" />
      <div className="col-7">
      <h1 className="Plan"> Annual Plan</h1>
      <p className="Price"> $59.99/year</p>
      </div>
      <Button class={"col-3"} text={"Change"} />
    </div>
  );
}

export default Product;
