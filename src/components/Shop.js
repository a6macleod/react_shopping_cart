import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <div className="shop">
      {props.products.map((item) => {
        return (
          <div key={item.id} className={`item ${item.id}`}>
            <Link to={`/${item.id}`} onClick={() => props.itemToView(item)}>
              <img src={item.img} alt={item.description} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
