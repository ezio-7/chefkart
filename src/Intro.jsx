import { useState } from 'react'
import data from './food1.json'
import "./Intro.css";
import ingredient1 from './assets/ingredient1.png'
import ingredient2  from './assets/ingredient2.png'
import timerLogo from './assets/timer.svg'
import { Outlet, Link } from "react-router-dom";
import Page1 from './Page1'
import backLogo from './assets/back.svg'
import starLogo from './assets/star.svg'


const dishName = data.name;
const timeToPrepare = data.timeToPrepare;
export default function Intro() {
    return (
      <div className = "Intro">
        <span className="goToPage1">
          <Link style={{color: '#FF8800'}} to={`/`}>
            <img src={backLogo} className="introBackLogo" alt="back logo" />
          </Link>
        </span>
        <div className="introName">
          {dishName}
          <span className="introRating">
                  <span className="introRate">4.2</span>
                  <img src={starLogo} className="introStarLogo" alt="star logo" />
          </span>
        </div>
        <div className='introDesc'>Mughlai Masala is a style of cookery developed <br />in the Indian Subcontinent by <br /> the imperial kitchens of the Mughal Empire.</div>
        <div className="time">
          <img src={timerLogo} className="timerLogo" alt="timer logo" />
          <span className='timeToCook'>{timeToPrepare}</span>
        </div>
        <hr className='page2hr'/>
        <div className="introImages"></div>
        <img src={ingredient1} className="ingredient1Img" alt="ingredient1" />
        <img src={ingredient2} className="ingredient2Img" alt="ingredient2" />
      </div>
    );
}