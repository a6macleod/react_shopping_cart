import { Link } from "react-router-dom";
import Quantity from "../components/Quantity";
import priceConverter from "../utils/priceConverter";
import "../styles/ItemView.css";

const ItemView = ({ item, updateCart }) => {
  return (
    <div className="itemView">
      <div className="keepShoppingContainer">
          <Link to="/shop">
            <button className="secondaryButton">
              <i className="fas fa-arrow-left"></i> Keep Shopping!
            </button>
          </Link>
      </div>
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={item.img} alt={item.brief} />
        </div>
      </div>
      <div className="itemInfo">
        <div className="infoContainer">
          <h2>{item.name}</h2>
          <h4>${priceConverter(item.cost)}</h4>
          <p>{item.description}</p>
          <Quantity updateCart={updateCart} item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemView;
