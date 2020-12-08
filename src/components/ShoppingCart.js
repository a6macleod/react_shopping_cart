import { useState, useEffect } from "react";
import Quantity from "./Quantity";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  // tells Quantity to view from the shoppingcart
  const checkout = true;
  const isCartEmpty = props.cart.length > 0 ? false : true;
  const [checkoutCost, setCheckoutCost] = useState({
    subtotal: 0.0,
    tax: 0.0,
    shipping: 0.0,
    total: 0.0,
  });

  const getSubtotal = () => {
    let tempSubtotal = 0;
    props.cart.forEach((cartItem) => {
      tempSubtotal = tempSubtotal + cartItem.quantity * cartItem.cost;
    });
    return tempSubtotal;
  };

  const getShipping = () => {
    let tempShipping = props.cart.length * 100;
    return tempShipping;
  };

  useEffect(() => {
    const subtotal = getSubtotal();
    const tax = subtotal * 0.113;
    const shipping = getShipping();
    const total = subtotal + tax + shipping;
    setCheckoutCost({
      subtotal: parseFloat(subtotal).toFixed(2),
      tax: parseFloat(tax).toFixed(2),
      shipping: parseFloat(shipping).toFixed(2),
      total: parseFloat(total).toFixed(2),
    });
  }, [props.cart]);

  const emptyCart = (
    <div className="cartItem">
      <div className="image"></div>
      <div className="title">
        <h4>Empty</h4>
      </div>
      <div className="amount"></div>
    </div>
  );

  const cartDetails = props.cart.map((cartItem) => (
    <div key={cartItem.id} className="cartItem">
      <img src={cartItem.img} alt={cartItem.discription} />
      <h4>{cartItem.name}</h4>
      <Quantity addItem={props.addItem} item={cartItem} checkout={checkout} />
    </div>
  ));

  return (
    <div className="shoppingCart">
      <div className="cartDisplayContainer">
        <div className="cartDisplay">
          {isCartEmpty ? emptyCart : cartDetails}
        </div>
      </div>
      <div className="totalsContainer">
        <p className="subtotal">SUBTOTAL: {`$${checkoutCost.subtotal}`}</p>
        <p className="tax">TAX: {`$${checkoutCost.tax}`}</p>
        <p className="shipping">SHIPPING: {`$${checkoutCost.shipping}`}</p>
        <h4 className="total">TOTAL: {`$${checkoutCost.total}`}</h4>
        <button className="checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
