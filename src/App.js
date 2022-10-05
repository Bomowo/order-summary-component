import React from "react";
import Product from "./components/Product";
import Text from "./components/Text";
import Button from "./components/Button";
import {ReactComponent as Img} from "./images/illustration-hero.svg"

function App() {
  return (
    <div className="OrderCard">
      <Img/>
      <Text/>
      <Product/>
      <Button class={'Payment'} text={'Proceed to Payment'}/>
      <Button class={'Cancel'} text={'Cancel Order'}/>
    </div>
  );
}

export default App;
