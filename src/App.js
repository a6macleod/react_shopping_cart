import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// JS components
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ItemView from "./components/ItemView";
import ShoppingCart from "./components/ShoppingCart";
import NoMatchPage from "./components/NoMatchPage";

import stock from "./productsAndImages/products"

// helper functions
import priceConverter from "./components/moneyFunctions";
// css
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState(stock);

  const [item, setItem] = useState([]);

  const itemToView = (it) => {
    setItem({
      id: it.id,
      name: it.name,
      description: it.description,
      img: it.img,
      cost: it.cost,
      quantity: it.quantity,
    });
  };

  // the shopping cart
  const [cart, setCart] = useState([]);

  // add an item to the cart state
  const addItem = (item, quantity = 1) => {
    const temp = cart.slice();
    // check if the item is already in the cart => update quantity only
    if (temp.some((cartItem) => cartItem.id === item.id)) {
      for (let cartItem of temp) {
        // update quantity for item already in cart
        if (cartItem.id === item.id) {
          cartItem.quantity = Number(cartItem.quantity) + Number(quantity);
        }
      }
    } else {
      // add a new item to an empty cart
      item.quantity = quantity;
      temp.push(item);
    }
    setCart(temp);
  };

  const minusQuantityOfItem = (item) => {
    const temp = cart.slice();
    for (let cartItem of temp) {
      // update quantity for item already in cart
      if (cartItem.id === item.id) {
        cartItem.quantity = Number(cartItem.quantity) - 1;
      }
      if (cartItem.quantity < 1) {
        cartItem.quantity = 1;
      }
    }
    setCart(temp);
  };

  const removeItemFromCart = (item) => {
    const temp = [];
    for (let cartItem of cart) {
      // add all items to the new cart except for removed item
      if (cartItem.id !== item.id) {
        temp.push(cartItem);
      }
    }
    setCart(temp);
  };

  // shopping cart prices, totals, subtotals
  const [checkoutCost, setCheckoutCost] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  });

  useEffect(() => {
    const getSubtotal = () => {
      let tempSubtotal = 0;
      cart.forEach((cartItem) => {
        tempSubtotal = tempSubtotal + cartItem.quantity * cartItem.cost;
      });
      return tempSubtotal;
    };

    const getShipping = () => {
      let tempShipping = cart.length * 10000;
      return tempShipping;
    };

    const subtotal = getSubtotal();
    const tax = subtotal * 0.113;
    const shipping = getShipping();
    const total = subtotal + tax + shipping;

    setCheckoutCost({
      subtotal: parseFloat(priceConverter(subtotal)).toFixed(2),
      tax: parseFloat(priceConverter(tax)).toFixed(2),
      shipping: parseFloat(priceConverter(shipping)).toFixed(2),
      total: parseFloat(priceConverter(total)).toFixed(2),
    });
  }, [cart]);

  // update the cart icon
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(cart.length);
  }, [cart]);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header cartQuantity={cartQuantity} />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop">
              <Shop products={products} itemToView={itemToView} />
            </Route>
            <Route exact path="/shopping-cart">
              <ShoppingCart
                cart={cart}
                addItem={addItem}
                checkoutCost={checkoutCost}
                minusQuantityOfItem={minusQuantityOfItem}
                removeItemFromCart={removeItemFromCart}
              />
            </Route>
            <Route exact path="/:id">
              <ItemView addItem={addItem} item={item} />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
