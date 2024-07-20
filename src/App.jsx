import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./T1Sayfasi/Home/Home";
import OrderPizza from "./T1Sayfasi/OrderPizza/OrderPizza";
import Success from "./T1Sayfasi/Success/Success";

function App() {
  const [choiseValue, setChoiseValue] = useState([]);
  const [sizeValue, setSizeValue] = useState([]);
  const [pastryValue, setPastryValue] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [checkTotalPrice, setCheckTotalPrice] = useState([]);
  const [totalPriceValue, setTotalPriceValue] = useState([]);
  const [validation, setValidation] = useState(0)
  
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/orderpizza">
          
          <OrderPizza
          validation={validation}
          setValidation={setValidation}
            pastryValue={pastryValue}
            choiseValue={choiseValue}
            sizeValue={sizeValue}
            setTotalPriceValue={setTotalPriceValue}
            totalPriceValue={totalPriceValue}
            checkTotalPrice={checkTotalPrice}
            setCheckTotalPrice={setCheckTotalPrice}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            setChoiseValue={setChoiseValue}
            setPastryValue={setPastryValue}
            setSizeValue={setSizeValue}
          />
        </Route>
        <Route exact path="/success">
          <Success
            totalPriceValue={totalPriceValue}
            checkTotalPrice={checkTotalPrice}
            checkedItems={checkedItems}
            choiseValue={choiseValue}
            sizeValue={sizeValue}
            pastryValue={pastryValue}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
