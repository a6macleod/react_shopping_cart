import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";
import CartDisplay from "../components/CartDisplay";
import TotalCostContainer from "../components/TotalCostContainer";
import "../styles/ShoppingCart.css";

const ShoppingCart = (props) => {
  const isCartEmpty = props.cart.length < 1 ? true : false;

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
            {isCartEmpty ?
              <EmptyCart />
            :
            <CartDisplay
            cart={props.cart}
            updateCart={props.updateCart}
            checkoutInfo={props.checkoutInfo}
            removeItemFromCart={props.removeItemFromCart}
          />
            }
          </div>
        </div>
      </div>
      <TotalCostContainer checkoutInfo={props.checkoutInfo}/>
    </div>
  );
};

export default ShoppingCart;
