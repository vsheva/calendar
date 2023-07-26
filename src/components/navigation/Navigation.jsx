import React from 'react';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';
import classNames from 'classnames';
import "./navigation.scss"

const Navigation = ({ weekDates }) => {
 let isToday =false;
 const date = new Date(
     new Date().getFullYear(),
     new Date().getMonth(),
     new Date().getDate(),
 );

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) =>{
          date.getTime() ===dayDate.getTime() ? (isToday = true) : (isToday=false)

          return (
              <div key={index} className="calendar__day-label day-label">
          <span className={classNames("day-label__day-name", {
              "day-label__day-name_today": isToday === true,
          })}>{days[dayDate.getDay()]}</span>

                  <span className={classNames("day-label__day-number", {
                      "day-label__day-number_today": isToday === true,
                  })}>{dayDate.getDate()}</span>

                  <div
                      className={classNames("circle", {
                          "circle_today": isToday === true,
                      })}></div>
              </div>
          )
      } )}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;












/*
import React from 'react';
import PropTypes from 'prop-types';
import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
    return (
        <header className="calendar__header">
            {weekDates.map((dayDate, index) => (
                <div key={index} className="calendar__day-label day-label">
                    <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
                    <span className="day-label__day-number">{dayDate.getDate()}</span>
                </div>
            ))}
        </header>
    );
};

Navigation.propTypes = {
    weekDates: PropTypes.array.isRequired,
};

export default Navigation;
*/

