import Quantity from "./Quantity";

const ItemView = (props) => {
  return (
    <div className="itemView">
      <h2>{props.item.id}</h2>
      <h4>{props.item.cost}</h4>
      <img src={props.item.img} alt="" />
      <Quantity addItem={props.addItem} item={props.item} />
    </div>
  );
};

export default ItemView;
