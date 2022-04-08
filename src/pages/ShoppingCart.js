import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";
import CartDisplay from "../components/CartDisplay";
import TotalCostContainer from "../components/TotalCostContainer";
import "../styles/ShoppingCart.css";
import "../styles/buttons.css";

const ShoppingCart = ({ cart, updateCart, checkoutInfo, removeItemFromCart }) => {
  const isCartEmpty = cart.length < 1 ? true : false;

  return (
    <div className="shoppingCart">
      <div className="cartItemsContainer">
        <div className="keepShoppingContainer">
          <Link to="/shop">
            <button className="secondaryButton">
              <i className="fas fa-arrow-left"></i> Keep Shopping!
            </button>
          </Link>
        </div>
        <div className="cartDisplayContainer">
          <div className="cartDisplay">
            {isCartEmpty ?
              <EmptyCart />
            :
            <CartDisplay
            cart={cart}
            updateCart={updateCart}
            removeItemFromCart={removeItemFromCart}
          />
            }
          </div>
        </div>
      </div>
      <TotalCostContainer checkoutInfo={checkoutInfo}/>
    </div>
  );
};

export default ShoppingCart;
