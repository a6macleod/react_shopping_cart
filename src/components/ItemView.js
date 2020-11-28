import React, { useState } from "react";

const ItemView = (props) => {
  const [itemAmount, setItemAmount] = useState(1);

  const handleChange = (e) => {
    setItemAmount(e.target.value);
  };

  return (
    <div className="itemView">
      <h2>{props.item.id}</h2>
      <h4>{props.item.cost}</h4>
      <img src={props.item.img} alt="" />
      <input type="number" value={itemAmount} onChange={handleChange} />
      <button onClick={() => props.addItem(props.item)}>add to cart</button>
    </div>
  );
};

export default ItemView;
