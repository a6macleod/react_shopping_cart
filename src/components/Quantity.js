import React, { useState } from "react";

const Quantity = (props) => {
  const [itemAmount, setItemAmount] = useState(1);

  const handleChange = (e) => {
    if (e.target.value < 1) {
      setItemAmount(1);
    } else {
      setItemAmount(e.target.value);
    }
  };
  return (
    <div className="quantity">
      <input type="number" value={itemAmount} onChange={handleChange} />
      <button onClick={() => props.addItem(props.item, itemAmount)}>
        {props.checkout ? "update" : "add to cart"}
      </button>
    </div>
  );
};

export default Quantity;
