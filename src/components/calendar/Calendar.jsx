// import React, { Component } from 'react';
//
// import Navigation from './../navigation/Navigation';
// import Week from '../week/Week';
// import Sidebar from '../sidebar/Sidebar';
// import events from '../../gateway/events';
//
// import './calendar.scss';
//
// class Calendar extends Component {
//   state = {
//     events,
//   };
//
//   render() {
//     const { weekDates } = this.props;
//
//     return (
//       <section className="calendar">
//         <Navigation weekDates={weekDates} />
//         <div className="calendar__body">
//           <div className="calendar__week-container">
//             <Sidebar />
//             <Week weekDates={weekDates} events={this.state.events} />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }
//
// export default Calendar;



import React, { useEffect, useState } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEvents, deleteEvent } from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';
import moment from 'moment';

const Calendar = ({ weekDates, openModal, closeModal }) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    fetchEvents()
        .then(events => {
          const dataWeek = weekDates.map(el => moment(el).format('MMMM DD YYYY'));
          const newEvents = events.filter(({ dateFrom }) =>
              dataWeek.includes(moment(dateFrom).format('MMMM DD YYYY')),
          );
          return setEvents(newEvents);
        })
        .catch(error => alert(error.message));
  };

  useEffect(() => {
    getEvents();
  }, []);

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

export default Calendar;