import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ItemView from "./pages/ItemView";
import ShoppingCart from "./pages/ShoppingCart";
import NoMatchPage from "./pages/NoMatchPage";

import stock from "./productsAndImages/products"

import priceConverter from "./utils/priceConverter";

import "./styles/App.css";

function App() {
  const [products, ] = useState(stock);
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkoutInfo, setCheckoutInfo] = useState({
    totalQuantity: 0,
    subtotalPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
  });

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

  const updateItemQuantity = (item, currentCart, quantity) => {
    for (let cartItem of currentCart) {
      if (cartItem.id === item.id) {
        cartItem.quantity = Number(cartItem.quantity) + Number(quantity);
      }
      if (cartItem.quantity < 1) {
        cartItem.quantity = 1;
      }
    }
  };

  const addItemToCart = (item, currentCart, quantity) => {
    item.quantity = quantity;
    currentCart.push(item);
  };

  const removeItemFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  useEffect(() => {
  const getSubtotal = () => {
    let tempSubtotal = 0;
    cart.forEach((cartItem) => {
      tempSubtotal = tempSubtotal + cartItem.quantity * cartItem.cost;
    });
    return tempSubtotal;
  };

  const getTax = (subtotal) => {
    const taxRate = 0.113;
    return subtotal * taxRate;
  };

  const getShipping = (totalQuantity) => {
    let shippingPrice = totalQuantity * 10000;
    return shippingPrice;
  };

  const getCartQuantity = () => {
    let cartTotalQuantity = 0;
    cart.forEach((cartItem) => {
      cartTotalQuantity += cartItem.quantity;
    });
    return cartTotalQuantity;
  };

  const totalQuantity = getCartQuantity()
  const subtotal = getSubtotal();
  const tax = getTax(subtotal);
  const shipping = getShipping(totalQuantity);
  const total = subtotal + tax + shipping;

  setCheckoutInfo({
    totalQuantity: totalQuantity,
    subtotalPrice: priceConverter(subtotal),
    taxPrice: priceConverter(tax),
    shippingPrice: priceConverter(shipping),
    totalPrice: priceConverter(total),
  });
}, [cart]);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header checkoutInfo={checkoutInfo} />
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
                checkoutInfo={checkoutInfo}
                itemInfoForView={itemInfoForView}
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
