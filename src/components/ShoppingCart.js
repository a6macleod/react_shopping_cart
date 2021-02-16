import { Link } from "react-router-dom";
import priceConverter from "./moneyFunctions";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  // tells Quantity to view from the shoppingcart
  const isCartEmpty = props.cart.length > 0 ? false : true;

  const emptyCart = (
    <div className="cartItem">
      <div className="emptyCart">
        <h4>Your cart is empty</h4>
      </div>
    </div>
  );

  const cartDetails = props.cart.map((cartItem) => (
    <div key={cartItem.id} className="cartItem">
      <div className="imageContainer">
        <img src={cartItem.img} alt={cartItem.discription} />
      </div>
      <div className="headerContainer">
        <h4>{cartItem.name}</h4>
        <p>${priceConverter(cartItem.cost)} each</p>
        <div className="quantityContainer">
          <h4>
            {cartItem.quantity} <span className="normalWeight">walls</span>
          </h4>
          <div className="buttonContainer">
            <div className="plusMinusContainer">
              <button
                className="decrement"
                onClick={() => props.minusQuantityOfItem(cartItem)}
              >
                -
              </button>
              <button
                className="increment"
                onClick={() => props.addItem(cartItem, 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="deleteItem">
          <button onClick={() => props.removeItemFromCart(cartItem)}>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="shoppingCart">
      <div className="cartItemsContainer">
        <div className="keepShoppingContainer">
          <Link to="/shop">
            <button>
              <i className="fas fa-arrow-left"></i> Keep Shopping!
            </button>
          </Link>
        </div>
        <div className="cartDisplayContainer">
          <div className="cartDisplay">
            {isCartEmpty ? emptyCart : cartDetails}
          </div>
        </div>
      </div>
      <div className="totalsContainer">
        <div className="totals">
          <p className="subtotal">
            SUBTOTAL: {`$${props.checkoutCost.subtotal}`}
          </p>
          <p className="tax">TAX: {`$${props.checkoutCost.tax}`}</p>
          <p className="shipping">
            SHIPPING: {`$${props.checkoutCost.shipping}`}
          </p>
          <h4 className="total">TOTAL: {`$${props.checkoutCost.total}`}</h4>
          <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
