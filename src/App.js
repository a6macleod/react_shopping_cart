import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// JS components
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ItemView from "./components/ItemView";
import ShoppingCart from "./components/ShoppingCart";
import NoMatchPage from "./components/NoMatchPage";
// images for products
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
// css
import "./App.css";

function App() {
  // Products to purchase from the store
  const [products, setProducts] = useState([
    {
      id: "one",
      name: "Fancy Brick Wall",
      img: imgOne,
      cost: 1000,
    },
    {
      id: "two",
      name: "Angled Brick Wall",
      img: imgTwo,
      cost: 200,
    },

    {
      id: "three",
      name: "Red Brick over Old Brick Wall",
      img: imgThree,
      cost: 150,
    },

    {
      id: "four",
      name: "Mostly Painted White Brick Wall",
      img: imgFour,
      cost: 100,
    },

    {
      id: "five",
      name: "Probably Brick Wall",
      img: imgFive,
      cost: 25,
    },

    {
      id: "six",
      name: "Purple(?!?) Brick Wall",
      img: imgSix,
      cost: 700,
    },

    {
      id: "seven",
      name: "Framed Teal Brick Wall",
      img: imgSeven,
      cost: 600,
    },

    {
      id: "eight",
      name: "Used Brick Wall",
      img: imgEight,
      cost: 50,
    },

    {
      id: "nine",
      name: "Old Grey Brick Wall",
      img: imgNine,
      cost: 90,
    },

    {
      id: "ten",
      name: "Mixed Aged Brick Wall",
      img: imgTen,
      cost: 120,
    },

    {
      id: "eleven",
      name: "New Brick Wall",
      img: imgEleven,
      cost: 1000,
    },

    {
      id: "twelve",
      name: "Old Brick Wall",
      img: imgTwelve,
      cost: 40,
    },
  ]);

  // items that the user clicks into to view
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

  // update the cart icon
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(cart.length);
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <div>
          <Header cartQuantity={cartQuantity} />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop">
                <Shop products={products} itemToView={itemToView} />
              </Route>
              <Route path="/shopping-cart">
                <ShoppingCart cart={cart} addItem={addItem} />
              </Route>
              <Route exact path="/:id">
                <ItemView addItem={addItem} item={item} />
              </Route>
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
