import React, { useState, useEffect } from "react";
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
          <button className="increment" onClick={increment}>
            +
          </button>
          <button className="decrement" onClick={decrement}>
            -
          </button>
        </div>
      </div>
      <button onClick={() => props.addItem(props.item, itemAmount)}>
        {props.checkout ? "update" : "add to cart"}
      </button>
    </div>
  );
};

export default Quantity;
