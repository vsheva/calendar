import React from 'react';
import './header.scss';
import {months} from "./../../utils/dateUtils.js"


const Header = ({weekDates, todayWeek, prevWeek, nextWeek}) => {

const firstDayOfCurrentWeek =weekDates[0];
const lastDayOfCurrentWeek = weekDates[weekDates.length - 1];
const monthFirstDayOfCurrentWeek = weekDates[0].getMonth()
const monthLastDayOfCurrentWeek =weekDates[weekDates.length - 1].getMonth()

const displayedMonth = firstDayOfCurrentWeek === lastDayOfCurrentWeek
    ? months[monthFirstDayOfCurrentWeek] : months[monthLastDayOfCurrentWeek]


  return (
    <header className="header">
      <button className="button create-event-btn" >
        <i className="fas fa-plus create-event-btn__icon" ></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={todayWeek}>Today</button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left" onClick={prevWeek}></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right" onClick={nextWeek}></i>
        </button>
        <span className="navigation__displayed-month">{displayedMonth}</span>
      </div>
    </header>
  );
};

export default Header;






















// const monthFirstDayOfCurrentWeek = weekDates[0].getMonth();
// const monthLastDayOfCurrentWeek = weekDates[weekDates.length - 1].getMonth()
//
// const monthDiplayed = (monthFirstDayOfCurrentWeek === monthLastDayOfCurrentWeek)
//     ? (months[monthFirstDayOfCurrentWeek])
//     : (months[monthLastDayOfCurrentWeek])
//
//






