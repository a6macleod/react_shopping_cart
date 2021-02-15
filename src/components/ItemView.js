import Quantity from "./Quantity";
import priceConverter from "./moneyFunctions";
import "./ItemView.css";

const ItemView = (props) => {
  return (
    <div className="itemView">
      <div className="leftContainer">
        <h2>{props.item.name}</h2>
        <div className="imgContainer">
          <img src={props.item.img} alt={props.item.brief} />
        </div>
      </div>
      <div className="itemInfo">
        <div className="infoContainer">
          <h4>${priceConverter(props.item.cost)}</h4>
          <p>{props.item.description}</p>
          <div className="itemViewContainer">
            <Quantity addItem={props.addItem} item={props.item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
