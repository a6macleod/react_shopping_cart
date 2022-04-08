import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Quantity.css";
import "../styles/buttons.css";

const Quantity = ({ item, updateCart }) => {
  const [itemAmount, setItemAmount] = useState(1);

  const increment = () => {
    setItemAmount(itemAmount + 1);
  };

  const decrement = () => {
    if (itemAmount <= 1) {
      setItemAmount(1);
    } else {
      setItemAmount(itemAmount - 1);
    }
  };

  return (
    <div className="quantity">
      <h3>Quantity: { itemAmount }</h3>
      <div className="buttonContainer">
        <div className="plusMinusContainer">
          <button className="decrement" onClick={ decrement }>
            -
          </button>
          <button className="increment" onClick={ increment }>
            +
          </button>
        </div>
      </div>
      <Link to="/shopping-cart">
        <button
          className="primaryButton"
          onClick={() => updateCart(item, itemAmount)}
        >
          add to cart
        </button>
      </Link>
    </div>
  );
};

export default Quantity;
