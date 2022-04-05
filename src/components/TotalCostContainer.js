const TotalCostContainer = ({ checkoutInfo }) => {
  return (
    <div className="totalsContainer">
      <div className="totals">
        <p className="subtotal">
          SUBTOTAL: {`$${checkoutInfo.subtotalPrice}`}
        </p>
        <p className="tax">
          TAX: {`$${checkoutInfo.taxPrice}`}
        </p>
        <p className="shipping">
          SHIPPING: {`$${checkoutInfo.shippingPrice}`}
        </p>
        <h4 className="total">TOTAL: {`$${checkoutInfo.totalPrice}`}</h4>
        <button className="checkout">CHECKOUT</button>
      </div>
  </div>
  );
};

export default TotalCostContainer;