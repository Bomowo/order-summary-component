import React from "react";
import Product from "./components/Product";
import Text from "./components/Text";
import Button from "./components/Button";

function App() {
  return (
    <div className="OrderCard">
      <Text/>
      <Product/>
      <Button text={'Proceed to Payment'}/>
      <Button text={'Cancel Order'}/>
    </div>
  );
}

export default App;
