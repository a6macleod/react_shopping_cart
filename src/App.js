import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ItemView from "./pages/ItemView";
import ShoppingCart from "./pages/ShoppingCart";
import NoMatchPage from "./pages/NoMatchPage";

import stock from "./productsAndImages/products"

import priceConverter from "./utils/moneyFunctions";

import "./styles/App.css";

function App() {
  const [products, setProducts] = useState(stock);
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

  const itemInfoForView = (item) => {
    setItem({
      id: item.id,
      name: item.name,
      description: item.description,
      img: item.img,
      cost: item.cost,
      quantity: item.quantity,
    });
  };


  const updateCart = (item, quantity = 1) => {
    const currentCart = cart.slice();
    if (itemIsAlreadyInCart(item, currentCart)) {
      updateItemQuantity(item, currentCart, quantity);
    } else {
      addItemToCart(item, currentCart, quantity)

    }
    setCart(currentCart);
  };

  const itemIsAlreadyInCart = (item, currentCart) => {
    return currentCart.some((cartItem) => cartItem.id === item.id)
  };

  const addItemToCart = (item, currentCart, quantity) => {
// add a new item to an empty cart
item.quantity = quantity;
currentCart.push(item);
  }

  const updateItemQuantity = (item, currentCart, quantity) => {
    for (let cartItem of currentCart) {
      if (cartItem.id === item.id) {
        cartItem.quantity = Number(cartItem.quantity) + Number(quantity);
      }
    }
  }

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
              <Shop products={products} itemInfoForView={itemInfoForView} />
            </Route>
            <Route exact path="/shopping-cart">
              <ShoppingCart
                cart={cart}
                updateCart={updateCart}
                checkoutCost={checkoutCost}
                minusQuantityOfItem={minusQuantityOfItem}
                removeItemFromCart={removeItemFromCart}
              />
            </Route>
            <Route exact path="/:id">
              <ItemView updateCart={updateCart} item={item} />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
