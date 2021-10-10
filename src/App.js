import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import OrderNowMain from "./components/OrderNow/OrderNowMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./components/OrderNow/CartPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/">
        <LandingPage />
          </Route>
          <Route exact path="/orderNow">
            <OrderNowMain/>
          </Route>
          <Route exact path="/cart">
            <CartPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
