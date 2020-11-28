const ItemView = (props) => {
  return (
    <div>
      {props.img}
      <input type="number" />
      <button onClick={() => props.addItem("one", 1)}>add to cart</button>
    </div>
  );
};

export default ItemView;
