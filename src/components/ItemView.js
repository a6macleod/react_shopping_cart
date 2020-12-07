import Quantity from "./Quantity";
import "./ItemView.css";

const ItemView = (props) => {
  return (
    <div className="itemView">
      <div className="imgContainer">
        <img src={props.item.img} alt={props.item.brief} />
      </div>
      <div className="itemInfo">
        <h2>{props.item.name}</h2>
        <h4>${props.item.cost}</h4>
        <Quantity addItem={props.addItem} item={props.item} />
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default ItemView;
