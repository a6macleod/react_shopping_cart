import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import NoMatchPage from "./components/NoMatchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [cart, setCart] = useState([
    {
      id: "one",
      quantity: 1,
    },
  ]);

  const addItem = (item) => {
    const temp = cart.slice();
    temp.push({ item: 1 });
    setCart(temp);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop">
              <Shop addItem={addItem} />
            </Route>
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
