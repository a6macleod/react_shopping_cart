import Quantity from "./Quantity";
import priceConverter from "./moneyFunctions";
import "./ItemView.css";

const ItemView = (props) => {
  return (
    <div className="itemView">
      <h2>{props.item.name}</h2>
      <div className="imgContainer">
        <img src={props.item.img} alt={props.item.brief} />
      </div>
      <div className="itemInfo">
        <p>{props.item.description}</p>
        <h4>${priceConverter(props.item.cost)}</h4>
        <Quantity addItem={props.addItem} item={props.item} />
      </div>
    </div>
  );
};

export default ItemView;
