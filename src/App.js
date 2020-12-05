import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ItemView from "./components/ItemView";
import ShoppingCart from "./components/ShoppingCart";
import NoMatchPage from "./components/NoMatchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import imgOne from "./images/imgOne.jpg";
import imgTwo from "./images/imgTwo.jpg";
import imgThree from "./images/imgThree.jpg";
import imgFour from "./images/imgFour.jpg";
import imgFive from "./images/imgFive.jpg";
import imgSix from "./images/imgSix.jpg";
import imgSeven from "./images/imgSeven.jpg";
import imgEight from "./images/imgEight.jpg";
import imgNine from "./images/imgNine.jpg";
import imgTen from "./images/imgTen.jpg";
import imgEleven from "./images/imgEleven.jpg";
import imgTwelve from "./images/imgTwelve.jpg";

function App() {
  // Products for the store
  const [products, setProducts] = useState([
    {
      id: "one",
      img: imgOne,
      cost: 100,
    },
    {
      id: "two",
      img: imgTwo,
      cost: 100,
    },

    {
      id: "three",
      img: imgThree,
      cost: 100,
    },

    {
      id: "four",
      img: imgFour,
      cost: 100,
    },

    {
      id: "five",
      img: imgFive,
      cost: 100,
    },

    {
      id: "six",
      img: imgSix,
      cost: 100,
    },

    {
      id: "seven",
      img: imgSeven,
      cost: 100,
    },

    {
      id: "eight",
      img: imgEight,
      cost: 100,
    },

    {
      id: "nine",
      img: imgNine,
      cost: 100,
    },

    {
      id: "ten",
      img: imgTen,
      cost: 100,
    },

    {
      id: "eleven",
      img: imgEleven,
      cost: 100,
    },

    {
      id: "twelve",
      img: imgTwelve,
      cost: 100,
    },
  ]);

  // items that the user is looking at
  const [item, setItem] = useState([]);

  const itemToView = (it) => {
    setItem({
      id: it.id,
      img: it.img,
      cost: it.cost,
    });
  };

  // the shopping cart
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  // update the cart icon
  useEffect(() => {
    setCartQuantity(cart.length);
  }, [cart]);

  // add an item to the cart state
  const addItem = (item, quantity = 1) => {
    const temp = cart.slice();
    // check if item is already in the cart
    if (temp.length > 0) {
      for (let cartItem of temp) {
        if (cartItem.item.id === item.id) {
          cartItem.quantity = Number(cartItem.quantity) + Number(quantity);
        } else {
          // add a new item to the cart (when not empty)
          temp.push({ item, quantity });
        }
      }
    } else {
      // add a new item to an empty cart
      temp.push({ item, quantity });
    }
    setCart(temp);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Header cartQuantity={cartQuantity} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop">
              <Shop products={products} itemToView={itemToView} />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart cart={cart} />
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
