import "./Header.css";
import backLogo from './assets/back.svg'
import calendarLogo from './assets/calendar.svg'
import clockLogo from './assets/clock.svg'

export default function Header() {
  return (
    <div className = "Header">
      <div className = "partA">
        <img src={backLogo} className="backLogo" alt="back logo" />
        <span>Select Dishes</span>
      </div>
      <div className = "partB">
      </div>
      <div className = "partC">
          <span>
            <img src={calendarLogo} className="calendarLogo" alt="calendar logo" />
            <span>21 May 2021</span>
          </span>
          <span>
            <img src={clockLogo} className="clockLogo" alt="clock logo" />
            <span>10:30Pm-12:30Pm</span>
          </span>
        </div>
    </div>
  );
}
