import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/buttons.css"

const Home = () => {
  return (
    <div className="home">
      <div className="shippingBanner">
        <div className="starContainer">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h3>Everyday Flat Rate Shipping</h3>
        <div className="starContainer">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <div className="hero">
        <div className="overlay">
          <div className="modal">
            <h2 className="">Sturdy American Made Brick Walls</h2>
            <Link to="/shop">
              <button className="primaryButton">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
