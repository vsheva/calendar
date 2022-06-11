import React, {useState, useEffect} from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import moment from 'moment';


const Hour = ({ dataHour, hourEvents, removeEvent, dayStart }) => {


  const[minutes, setMinutes]=useState(new Date().getMinutes())
  const[hour, setHour]=useState(new Date().getHours())

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHour(hour + 1);
    }
    const interval = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60*1000);

    return () => {
      clearInterval(interval);
    };
  });

  const getToday =
      moment(dayStart).format('MMMM DD YYYY') === moment(new Date()).format('MMMM DD YYYY');



  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {getToday && dataHour === hour ? (<div style={{ top: minutes }} className="red-line"></div>) : null}



      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            id={id}
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

export default Hour;





/*
const Hour = ({ dataHour, hourEvents }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/!* if no events in the current hour nothing will render here *!/}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
          />
        );
      })}
    </div>
  );
};
*/