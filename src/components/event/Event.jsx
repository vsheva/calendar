import React, { useState } from 'react';
import './event.scss';

const Event = ({ height, marginTop, title, id, time, removeEvent }) => {
  const [deleteButtonVisibility, toggleButtonVisibility] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className="event"
      onClick={() => toggleButtonVisibility(!deleteButtonVisibility)}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {deleteButtonVisibility && (
        <button className="delete-event-btn" onClick={() => removeEvent(id)}>
          <i className="fa fa-trash"></i>
        </button>
      )}
    </div>
  );
};

export default Event;

/*
const Event = ({ height, marginTop, title, time }) => {

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
*/
