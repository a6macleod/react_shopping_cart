import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="react_shopping_cart/">
        <h2>Ye Olde Brick Shoppe</h2>
      </Link>
      <nav>
        <ul>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="react_shopping_cart/shopping-cart">
            <li>
              <i className="fas fa-shopping-cart">{props.cartQuantity}</i>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
