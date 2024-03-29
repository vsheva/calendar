import React, { useState, useEffect } from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';

const Day = ({ dataDay, dayEvents, dayStart, removeEvent, setIsWeekUpdate }) => {

  const [isDayUpdate, setIsDayUpdate] = useState(false);
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour + '' + isDayUpdate}
            dataHour={hour}
            hourEvents={hourEvents}
            dayStart={dayStart}
            removeEvent={removeEvent}
            setIsDayUpdate={setIsDayUpdate}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default Day;

/*
//old version

import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';

const Day = ({ dataDay, dayEvents, dayStart, removeEvent }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            dayStart={dayStart}
            removeEvent={removeEvent}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default Day;

*/
