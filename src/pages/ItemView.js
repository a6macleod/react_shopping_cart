import Quantity from "../components/Quantity";
import priceConverter from "../utils/moneyFunctions";
import "../styles/ItemView.css";

const ItemView = ({ item, updateCart }) => {
  return (
    <div className="itemView">
      <div className="leftContainer">
        <h2>{item.name}</h2>
        <div className="imgContainer">
          <img src={item.img} alt={item.brief} />
        </div>
      </div>
      <div className="itemInfo">
        <div className="infoContainer">
          <h4>${priceConverter(item.cost)}</h4>
          <p>{item.description}</p>
          <Quantity updateCart={updateCart} item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemView;
