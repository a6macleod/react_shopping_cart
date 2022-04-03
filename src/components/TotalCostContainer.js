const TotalCostContainer = (props) => {
  return (
    <div className="totalsContainer">
    <div className="totals">
      <p className="subtotal">
        SUBTOTAL: {`$${props.checkoutInfo.subtotalPrice}`}
      </p>
      <p className="tax">TAX: {`$${props.checkoutInfo.taxPrice}`}</p>
      <p className="shipping">
        SHIPPING: {`$${props.checkoutInfo.shippingPrice}`}
      </p>
      <h4 className="total">TOTAL: {`$${props.checkoutInfo.totalPrice}`}</h4>
      <button className="checkout">CHECKOUT</button>
    </div>
  </div>
  );
};

export default TotalCostContainer;