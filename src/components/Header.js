import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <h2>Ye Olde Brick Shoppe</h2>
      </Link>
      <nav>
        <ul>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/shopping-cart">
            <li>
              <i className="fas fa-shopping-cart">{props.checkoutCost.totalQuantity}</i>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
