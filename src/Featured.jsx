import "./Featured.css";
import foodImg from './assets/food.jpg'
import data from './data.json'

const popDishes = data.popularDishes;

export default function Featured() {
    return (
      <div className = "Featured">
        <div className="cuisine">
            <span>Italian</span>
            <span>Indian</span>
            <span>Indian</span>
            <span>Indian</span>
        </div>
        <div className="title">Popular Dishes</div>
        <div className="food-items">
            {popDishes.map((i, key) => {
                return (
                    <div key = {i.id} className = "food-item">
                        <img src={i.image} className={`foodImg${i.id}`} alt="foodImg" />
                        <span className="food-text">{i.name}</span>
                    </div>
                );
            })}
            {popDishes.map((i, key) => {
                return (
                    <div key = {i.id} className = "food-item">
                        <img src={i.image} className={`foodImg${i.id}`} alt="foodImg" />
                        <span className="food-text">{i.name}</span>
                    </div>
                );
            })}
            {popDishes.map((i, key) => {
                return (
                    <div key = {i.id} className = "food-item">
                        <img src={i.image} className={`foodImg${i.id}`} alt="foodImg" />
                        <span className="food-text">{i.name}</span>
                    </div>
                );
            })}
        </div>
        <hr className="hr"/>
      </div>
    );
  }

