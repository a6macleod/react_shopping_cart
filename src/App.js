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
// helper functions
import priceConverter from "./components/moneyFunctions";
// css
import "./App.css";

function App() {
  // Products to purchase from the store
  const [products, setProducts] = useState([
    {
      id: "one",
      name: "Fancy Brick Wall",
      brief: "An artfully crafted brick wall.",
      description:
        "An artfully crafted brick wall. This wall includes many varieties of styles and different formats including circular, angled, arches, and patterned. Perfect for schools and municipal buildings",
      img: imgOne,
      cost: 100000,
    },
    {
      id: "two",
      name: "Angled Brick Wall",
      brief: "A simple patterned brick wall.",
      description:
        "A simple yet elegantly patterned brick wall. This wall is perfect for drawing the eye yet highlighting hanging artwork. Perfect for lofts and art studios",
      img: imgTwo,
      cost: 20000,
    },

    {
      id: "three",
      name: "Red Brick over Old Brick Wall",
      brief: "Newer red brick overlaying an older foundation.",
      description:
        "New bright red brick overlaying a solid older foundation. Nothing beats a settled solid old foundation. The test of time has proven that the founcation is settled and unlikely to move and will highlight the bright red newer section. Perfect for that refurbished look for revitilized factory districts.",
      img: imgThree,
      cost: 15000,
    },

    {
      id: "four",
      name: "Painted White Brick Wall",
      brief: "Mostly painted white brick wall with aged look.",
      description:
        "A solid brick wall that was painted white and aged. The aged look gives it a subtle character perfet to highlight acents and art. Good for revitilized factory loft apartments.",
      img: imgFour,
      cost: 10000,
    },

    {
      id: "five",
      name: "'Brick' Wall",
      brief: "Probably brick, brick wall.",
      description:
        "An affordable wall option for what is likely brick. You get a solid wall at a great price and sure looks like brick.",
      img: imgFive,
      cost: 2500,
    },

    {
      id: "six",
      name: "Purple(?!?) Brick Wall",
      brief: "Bright incandescent purple brick wall.",
      description:
        "Very hip and cool bright purple brick wall. Sure to turn heads with this brick wall, it is perfect for night clubs and bar districts.",
      img: imgSix,
      cost: 70000,
    },

    {
      id: "seven",
      name: "Framed Teal Brick Wall",
      brief: "A nice framed brick wall to highlight an accent.",
      description:
        "This framed brick wall is a nice calming teal color. This wall is perfect for coffee shops where art is framed and naturally draws the eye. The teal is soft and calming which brings pleasant moods for morning coffee.",
      img: imgSeven,
      cost: 60000,
    },

    {
      id: "eight",
      name: "Used Brick Wall",
      brief: "Bargin build your own wall.",
      description:
        "This DIY build your own brick wall is perfect for Christmas! Have the opportunity to build your confidence as you build your own brick wall!",
      img: imgEight,
      cost: 5000,
    },

    {
      id: "nine",
      name: "Old Grey Brick Wall",
      brief: "This wall is old and it is brick.",
      description:
        "This old brick wall is tried and true. The test of time has proven that you can't beat an old brick wall for its affordability and its proven reliability. Perfect general wall for any space.",
      img: imgNine,
      cost: 9000,
    },

    {
      id: "ten",
      name: "Mixed Aged Brick Wall",
      brief: "A reliable mix of new and old brick.",
      description:
        "This is a reliable mix of new and old brick wall which makes a solid wall. This is pleasing to the eye and sturdy. Get the benefits of both a shiny new wall and the reliablity of an old brick wall.",
      img: imgTen,
      cost: 12000,
    },

    {
      id: "eleven",
      name: "New Brick Wall",
      brief: "Brand new shiny brick wall.",
      description:
        "This brand new brick wall is polished and sharp. This is perfect for new high end row houses. Be sure to impress the neighbors with your new brick!",
      img: imgEleven,
      cost: 100000,
    },

    {
      id: "twelve",
      name: "Old Brick Wall",
      brief: "The old tried and true sturdy brick wall.",
      description:
        "This old brick wall is as sturdy as they come. When shiny and new isn't needed this brick is perfect to hold the wall where it matters. Bargin prices and a quality wall.",
      img: imgTwelve,
      cost: 4000,
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
      <Router>
        <div>
          <Header cartQuantity={cartQuantity} />
          <div className="main">
            <Switch>
              <Route exact path="react_shopping_cart/" component={Home} />
              <Route exact path="react_shopping_cart/shop">
                <Shop products={products} itemToView={itemToView} />
              </Route>
              <Route exact path="react_shopping_cart/shopping-cart">
                <ShoppingCart
                  cart={cart}
                  addItem={addItem}
                  checkoutCost={checkoutCost}
                  minusQuantityOfItem={minusQuantityOfItem}
                  removeItemFromCart={removeItemFromCart}
                />
              </Route>
              <Route exact path="react_shopping_cart/:id">
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
