import React, { useState, useEffect } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';
import Modal from '../modal/Modal';
import { fetchEvents, deleteEvent } from '../../gateway/events';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, openModal, closeModal }) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    fetchEvents()
      .then(events => {
        const filteredEvents = events.filter(
          event =>
            new Date(event.dateFrom) >
            new Date(weekDates[0] && new Date(event.dateFrom) < new Date(weekDates[6])),
        );
        return setEvents(filteredEvents);
      })
      .catch(error => alert(error.message));
  };

  useEffect(() => {
    getEvents();
  }, [weekDates]);

  const removeEvent = id => {
    deleteEvent(id).then(() => getEvents());
  };

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={events} removeEvent={removeEvent} />
        </div>
      </div>
      {openModal && <Modal closeModal={closeModal} getEvents={getEvents} />}
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Calendar;
