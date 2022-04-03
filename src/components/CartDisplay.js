import priceConverter from "../utils/moneyFunctions";

const CartDisplay = (props) => {
 return (
  props.cart.map((cartItem) => (
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
                onClick={() => props.updateCart(cartItem, -1)}
              >
                -
              </button>
              <button
                className="increment"
                onClick={() => props.updateCart(cartItem, 1)}
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
  ))
 );
};

export default CartDisplay;