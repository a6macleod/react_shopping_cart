import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = (props) => {
  return (
    <div className="shop">
      <div className="itemsContainer">
        {props.products.map((item) => {
          return (
            <div key={item.id} className={`item ${item.id}`}>
              <Link to={`/${item.id}`} onClick={() => props.itemToView(item)}>
                <h4>{item.name}</h4>
                <div className="imageContainer">
                  <img src={item.img} alt={item.brief} />
                </div>
                <p>{item.brief}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
