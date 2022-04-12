import { Link } from "react-router-dom";
import priceConverter from "../utils/priceConverter";

const CartDisplay = ({ cart, updateCart, removeItemFromCart, itemInfoForView }) => {
 return (
  cart.map((cartItem) => (
    <div key={cartItem.id} className="cartItem">
      <div className="imageContainer">
        <Link to={`/${cartItem.name.split(' ').join('-')}`} onClick={() => itemInfoForView(cartItem)}>
          <img src={cartItem.img} alt={cartItem.discription} />
        </Link>
      </div>
      <div className="headerContainer">
        <Link to={`/${cartItem.name.split(' ').join('-')}`} onClick={() => itemInfoForView(cartItem)}>
          <h4>{cartItem.name}</h4>
        </Link>
        <p>${priceConverter(cartItem.cost)} each</p>
        <div className="quantityContainer">
          <h4>
          <span className="normalWeight">Quantity: </span>{cartItem.quantity}
          </h4>
          <div className="buttonContainer">
            <div className="plusMinusContainer">
              <button
                className="decrement"
                onClick={() => updateCart(cartItem, -1)}
              >
                -
              </button>
              <button
                className="increment"
                onClick={() => updateCart(cartItem, 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button className="deleteButton" onClick={() => removeItemFromCart(cartItem)}>
          Remove Item
        </button>
      </div>
    </div>
  ))
 );
};

export default CartDisplay;