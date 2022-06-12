import React, { useState } from 'react';
import { getDateTime } from '../../utils/dateUtils';
import { createEvent } from '../../gateway/events';
import moment from 'moment';
import './modal.scss';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, getEvents }) => {
  const [inputData, setInputData] = useState({
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    startTime: '',
    endTime: '',
    description: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    const { title, date, startTime, endTime, description } = inputData;

    const newEvent = {
      title: title,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
      description: description,
      status: false,
    };

    createEvent(newEvent).then(() => getEvents());
    closeModal();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={e => setInputData({ ...inputData, title: e.target.value })}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={e => setInputData({ ...inputData, date: e.target.value })}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={e => setInputData({ ...inputData, startTime: e.target.value })}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={e => setInputData({ ...inputData, endTime: e.target.value })}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={e => setInputData({ ...inputData, description: e.target.value })}
            ></textarea>
            <button type="submit" className="event-form__submit-btn" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  getEvents: PropTypes.func.isRequired,
};
export default Modal;
