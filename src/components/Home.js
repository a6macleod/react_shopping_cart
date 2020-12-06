import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Link to="/shop">
          <h2 className="mainLink">
            Shop Brick Walls
            <br />
            Now!
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
