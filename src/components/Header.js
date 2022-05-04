import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ checkoutInfo }) => {
  return (
    <div className="header">
      <Link to="/">
        <h2 className="logo">Ye Olde Brick Shoppe</h2>
      </Link>
      <nav>
        <ul>
          <Link to="/shop">
            <li title="keep shopping">Shop</li>
          </Link>
          <Link to="/shopping-cart">
            <li>
              <i className="fas fa-shopping-cart" title="shopping cart">{checkoutInfo.totalQuantity}</i>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
