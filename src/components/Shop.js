import imgOne from "../images/imgOne.jpg";
import imgTwo from "../images/imgTwo.jpg";
import imgThree from "../images/imgThree.jpg";
import imgFour from "../images/imgFour.jpg";
import imgFive from "../images/imgFive.jpg";
import imgSix from "../images/imgSix.jpg";
import imgSeven from "../images/imgSeven.jpg";
import imgEight from "../images/imgEight.jpg";
import imgNine from "../images/imgNine.jpg";
import imgTen from "../images/imgTen.jpg";
import imgEleven from "../images/imgEleven.jpg";
import imgTwelve from "../images/imgTwelve.jpg";

const Shop = (props) => {
  return (
    <div className="shop">
      <div className="itemContainer">
        <div className="item 1">
          <img src={imgOne} alt="" />
          <button onClick={() => props.addItem("one")}>add an Item</button>
        </div>
        <div className="item 2">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 3">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 4">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 5">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 6">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 7">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 8">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 9">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 10">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 11">
          <img src={imgOne} alt="" />
        </div>
        <div className="item 12">
          <img src={imgOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
