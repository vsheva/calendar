import React, {useState} from 'react';
import {getDateTime} from '../../utils/dateUtils';
import {createEvent} from '../../gateway/events';
import moment from 'moment';
import './modal.scss';

const Form = ({getEvents, closeModal}) => {

    const [inputData, setInputData] = useState({
        title: '',
        date: moment(new Date()).format('YYYY-MM-DD'),
        startTime: '',
        endTime: '',
        description: '',
    });

    const handleChange = ({e, titleObj}) => {
        setInputData(prevState => ({...prevState, [titleObj]: e.target.value}));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const {title, date, startTime, endTime, description} = inputData;

        const eventFields = {
            title: title,
            dateFrom: getDateTime(date, startTime),
            dateTo: getDateTime(date, endTime),
            description: description,
            status: false,
        };

        createEvent(eventFields).then(() => getEvents());// создаем createEvent
        closeModal()
    };
    console.log("inputData:", inputData)
    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                onChange={e => handleChange({e, titleObj: 'title'})}
            />
            <div className="event-form__time">
                <input type="date"
                       name="date"
                       className="event-form__field"
                       onChange={e => handleChange({e, titleObj: 'date'})}
                />
                <input
                    type="time"
                    name="startTime"
                    className="event-form__field"
                    onChange={e => handleChange({e, titleObj: 'startTime'})}
                />
                <span>-</span>
                <input
                    type="time"
                    name="endTime"
                    className="event-form__field"
                    onChange={e => handleChange({e, titleObj: 'endTime'})}
                />
            </div>
            <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                onChange={e => handleChange({e, titleObj: 'description'})}
            ></textarea>
            <button type="submit" className="event-form__submit-btn" onSubmit={handleSubmit}>
                Create
            </button>
        </form>
    );
};

export default Form;
