import React from 'react';
import './header.scss';
import { months } from './../../utils/dateUtils.js';
import PropTypes from 'prop-types';

const Header = ({ nextWeek, prevWeek, currentWeek, weekDates, openModal }) => {
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
        <button className="navigation__today-btn button" onClick={currentWeek}>
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

Header.propTypes = {
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  currentWeek: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Header;
