import React, { useState } from 'react';
import './event.scss';
import PropTypes from 'prop-types';

const Event = ({ height, marginTop, title, id, time, removeEvent }) => {
  const [isVisible, setIsVisible] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  const buttonStyle = {
    marginTop: marginTop + height,
  };

  return (
    <>
      <div
        style={eventStyle}
        className="event"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {isVisible && (
        <button className="delete-event-btn" style={buttonStyle} onClick={() => removeEvent(id)}>
          <i className="fa fa-trash"></i>
        </button>
      )}
    </>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default Event;
