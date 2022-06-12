import React, { useState, useEffect } from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import moment from 'moment';
import PropTypes from 'prop-types';

const Hour = ({ dataHour, hourEvents, dayStart, removeEvent }) => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hour, setHours] = useState(new Date().getHours());

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours(hour + 1);
    }
    const interval = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getTodayDay =
    moment(dayStart).format('MMMM DD YYYY') === moment(new Date()).format('MMMM DD YYYY');

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}

      {getTodayDay && dataHour === hour ? (
        <div style={{ top: minutes }} className="red-line"></div>
      ) : null}

      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            id={id} // ?
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            removeEvent={removeEvent}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  removeEvent: PropTypes.func.isRequired,
  //dayStart: PropTypes.da.isRequired,
};

export default Hour;
