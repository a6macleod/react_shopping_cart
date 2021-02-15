import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Quantity.css";

const Quantity = (props) => {
  const [itemAmount, setItemAmount] = useState(1);

  useEffect(() => {
    if (props.checkout) {
      setItemAmount(props.item.quantity);
    }
  }, []);

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
      <h3>Quantity: {itemAmount}</h3>
      <div className="buttonContainer">
        <div className="plusMinusContainer">
          <button className="increment tertiaryButton" onClick={increment}>
            +
          </button>
          <button className="decrement tertiaryButton" onClick={decrement}>
            -
          </button>
        </div>
      </div>
      <Link to="/shopping-cart">
        <button
          className="secondaryButton"
          onClick={() => props.addItem(props.item, itemAmount)}
        >
          add to cart
        </button>
      </Link>
    </div>
  );
};

export default Quantity;
