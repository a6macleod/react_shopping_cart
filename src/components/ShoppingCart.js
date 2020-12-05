const ShoppingCart = (props) => {
  console.log(props.cart);

  const cartDetails = props.cart.map((cartItem) => (
    <div key={cartItem.item.id}>
      <img src={cartItem.item.img} alt={cartItem.item.discription} />
      <h4>{cartItem.item.name}</h4>
      <h5>quantity: {cartItem.quantity}</h5>
    </div>
  ));

  return (
    <div className="shoppingCart">
      <div className="cartDisplay">{cartDetails}</div>
    </div>
  );
};

export default ShoppingCart;
