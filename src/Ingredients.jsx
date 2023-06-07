import { useState } from 'react'
import data from './food1.json'
import "./Ingredients.css";
import dropDown from './assets/dropDown.svg'
import ing_refrigerator from './assets/ing_refrigerator.jpg'

const dishName = data.name;
const timeToPrepare = data.timeToPrepare;
const vegetables = data.ingredients.vegetables;
const ingData = data.ingredients.spices;
const appliances = data.ingredients.appliances;


export default function Ingredients() {
    return (
      <div className = "Ingredients">
        <div className="ing-head">
            <p className='ing-first'>Ingredients</p>
            <p className='ing-second'>For 2 people</p>
            <hr className='ing-hr' />
        </div>
        <div className="ing-veg">
            <div className='veg-head'>
                <span>Vegetables (03)</span>
                <img src={dropDown} className="dropDown" alt="dropDown logo" />
            </div>
            <div className="veg-main">
                {vegetables.map((i, key) => {
                    return (
                        <div key = {key} className = "veg-item">
                            <span>{i.name}</span>
                            <span>{i.quantity}</span>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="ing-spices">
            <div className='spices-head'>
                <span>Spices (02)</span>
                <img src={dropDown} className="dropDown" alt="dropDown logo" />
            </div>
            <div className="spices-main">
                {ingData.map((i, key) => {
                    return (
                        <div key = {key} className = "spices-item">
                            <span>{i.name}</span>
                            <span>{i.quantity}</span>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="ing-appliances">
            <div className='appliances-head'>
                <span>Appliances</span>
            </div>
            <div className="appliances-main">
                {appliances.map((i, key) => {
                    return (
                        <div key = {key} className = "appliances-item">
                            <img src={i.image} alt="appliance image" />
                            <span>{i.name}</span>
                        </div>
                    );
                })}
            </div>
        </div> 
      </div>
    );
}