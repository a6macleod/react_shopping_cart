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
        <p>Price: ${priceConverter(cartItem.cost)}</p>
      </div>
      <div className="quantityContainer">
        <h4>Quantity: {cartItem.quantity}</h4>
        <div className="buttonContainer">
          <div className="plusMinusContainer">
            <button
              className="increment"
              onClick={() => props.addItem(cartItem, 1)}
            >
              +
            </button>
            <button
              className="decrement"
              onClick={() => props.minusQuantityOfItem(cartItem)}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="deleteItem">
        <button>Remove Item</button>
      </div>
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
