import React from 'react';
import './header.scss';
import { months } from './../../utils/dateUtils.js';

const Header = ({ nextWeek, prevWeek, todayWeek, weekDates, openModal }) => {
  const firstDayWeekMonth = months[weekDates[0].getMonth()];
  const lastDayWeekMonth = months[weekDates[6].getMonth()];
  const textMonth =
    firstDayWeekMonth === lastDayWeekMonth
      ? firstDayWeekMonth
      : `${firstDayWeekMonth} - ${lastDayWeekMonth}`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={openModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={todayWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left" onClick={prevWeek}></i>
        </button>
        <button className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right" onClick={nextWeek}></i>
        </button>
        <span className="navigation__displayed-month">{textMonth}</span>
      </div>
    </header>
  );
};

export default Header;
