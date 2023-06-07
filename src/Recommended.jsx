import "./Recommended.css";
import dropDown from './assets/dropDown.svg'
import data from './data.json'
import vegLogo from './assets/veg.svg'
import starLogo from './assets/star.svg'
import refrigeratorLogo from './assets/refrigerator.svg'
import microwaveLogo from './assets/microwave.svg'
import selectedFoodLogo from './assets/selectedFood.svg'
import { Outlet, Link } from "react-router-dom";
import Page2 from './Page2'

const dishes = data.dishes;

export default function Recommended() {
  return (
    <div className = "Recommended">
      <div className="title">
        <span>Recommended</span>
        <img src={dropDown} className="dropDown" alt="dropDown logo" />
        <span>Menu</span>
      </div>
      <div className="foodDescription">
        {dishes.map((i, key) => {
          return (
            <div key = {i.id} className = "food">
              <div className="foodpartA">
                <span className="foodName">{i.name}</span>
                <img src={vegLogo} className="vegLogo" alt="veg logo" />
                <span className="totalRating">
                  <span className="rating">{i.rating}</span>
                  <img src={starLogo} className="starLogo" alt="star logo" />
                </span>
              </div>
              <img src={i.image} className="foodImg" alt="foodImg" />
              <div className="foodpartB">
                <div className="partBImage">
                  <img src={refrigeratorLogo} className="refrigeratorLogo" alt="refrigerator logo" />
                  <img src={microwaveLogo} className="microwaveLogo" alt="microwave logo" />
                </div>
                <div className="partBText">
                  <span className="refrigeratorText">Refrigerator</span>
                  <span className="microwaveText">Microwave </span>
                </div>
                <span className="partBIngredients">Ingredients</span>
                <span className="partBList">
                  <Link style={{color: '#FF8800'}} to={`page2`}> View list &gt; </Link>
                </span>
              </div>
              <div className="foodpartC">
                <p className="description">{i.description}</p>
              </div>
              <div className="addFoodButton">
                <span className="addFoodText">Add</span>
                <span className="addFoodPlus">+</span>
              </div>
              <hr className="hr"/>
            </div>
          );
        })}
        {dishes.map((i, key) => {
          return (
            <div key = {i.id} className = "food">
              <div className="foodpartA">
                <span className="foodName">{i.name}</span>
                <img src={vegLogo} className="vegLogo" alt="veg logo" />
                <span className="totalRating">
                  <span className="rating">{i.rating}</span>
                  <img src={starLogo} className="starLogo" alt="star logo" />
                </span>
              </div>
              <img src={i.image} className="foodImg" alt="foodImg" />
              <div className="foodpartB">
                <div className="partBImage">
                  <img src={refrigeratorLogo} className="refrigeratorLogo" alt="refrigerator logo" />
                  <img src={microwaveLogo} className="microwaveLogo" alt="microwave logo" />
                </div>
                <div className="partBText">
                  <span className="refrigeratorText">Refrigerator</span>
                  <span className="microwaveText">Microwave </span>
                </div>
                <span className="partBIngredients">Ingredients</span>
                <span className="partBList">
                  <Link style={{color: '#FF8800'}} to={`page2`}> View list &gt; </Link>
                </span>
              </div>
              <div className="foodpartC">
                <p className="description">{i.description}</p>
              </div>
              <div className="addFoodButton">
                <span className="addFoodText">Add</span>
                <span className="addFoodPlus">+</span>
              </div>
              <hr className="hr"/>
            </div>
          );
        })}
      </div>
      <div className="selected">
          <img src={selectedFoodLogo} className="selectedFoodLogo" alt="selectedFood logo" />
          <span>3 food items selected</span>
          <img src="https://img.icons8.com/ios-filled/50/000000/right--v1.png" className="rightArrow" alt="right arrow" />
      </div>
    </div>
  );
}