import priceConverter from "../utils/priceConverter";

const CartDisplay = ({ cart, updateCart, removeItemFromCart }) => {
 return (
  cart.map((cartItem) => (
    <div key={cartItem.id} className="cartItem">
      <div className="imageContainer">
        <img src={cartItem.img} alt={cartItem.discription} />
      </div>
      <div className="headerContainer">
        <h4>{cartItem.name}</h4>
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
        <div className="deleteItem">
          <button onClick={() => removeItemFromCart(cartItem)}>
            Remove Item
          </button>
        </div>
      </div>
    </div>
  ))
 );
};

export default CartDisplay;