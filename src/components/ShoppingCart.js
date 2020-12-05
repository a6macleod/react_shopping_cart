import Quantity from "./Quantity";

const ShoppingCart = (props) => {
  const cartDetails = props.cart.map((cartItem) => (
    <div key={cartItem.item.id}>
      <img src={cartItem.item.img} alt={cartItem.item.discription} />
      <h4>{cartItem.item.name}</h4>
      <Quantity addItem={props.addItem} item={props.item} />
    </div>
  ));

  return (
    <div className="shoppingCart">
      <div className="cartDisplay">{cartDetails}</div>
    </div>
  );
};

export default ShoppingCart;
