import React, { useState, useEffect } from "react";

const Quantity = (props) => {
  const [itemAmount, setItemAmount] = useState(1);

  useEffect(() => {
    if (props.checkout) {
      // console.log("checkout!");
      // console.log(props.item);
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

  // const handleChange = (e) => {
  //   if (e.target.value < 1) {
  //     setItemAmount(1);
  //   } else {
  //     setItemAmount(e.target.value);
  //   }
  // };
  return (
    <div className="quantity">
      <h3>Quantity: {itemAmount}</h3>
      <div>
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="decrement" onClick={decrement}>
          -
        </button>
      </div>
      {/*<input type="number" value={itemAmount} onChange={handleChange} />*/}
      <button onClick={() => props.addItem(props.item, itemAmount)}>
        {props.checkout ? "update" : "add to cart"}
      </button>
    </div>
  );
};

export default Quantity;
