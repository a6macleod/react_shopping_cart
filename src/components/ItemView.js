const ItemView = (props) => {
  return (
    <div>
      <h2>{props.item.id}</h2>
      <h4>{props.item.cost}</h4>
      <img src={props.item.img} alt="" />
      <input type="number" />
      <button onClick={() => props.addItem("one", 1)}>add to cart</button>
    </div>
  );
};

export default ItemView;
