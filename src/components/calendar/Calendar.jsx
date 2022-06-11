import React, { useEffect, useState } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEvents, deleteEvent } from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';
import moment from 'moment';
import Form from '../modal/Form';

const Calendar = ({ weekDates, closeModal, isModalOpen }) => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    fetchEvents().then(events =>
      setEvents(
        events.filter(
          event => new Date(event.dateFrom) > new Date(weekDates[0] && new Date(event.dateFrom) < new Date(weekDates[6])),
        ),
      ).catch(error => alert(error.message)),
    );
  };



  useEffect(() => {
    getEvents();
  }, []);

  //console.log(getEvents());

  const removeEvent = (id) => {
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
      {isModalOpen  && <Modal closeModal={closeModal} > <Form getEvents={getEvents}/></Modal>}
      {/*{isModalOpen && (<Modal closeModal={closeModal} >*/}

         {/* <Form getEvents={getEvents}/>*/}
        {/*</Modal>*/}
      )}
    </section>
  );
};

export default Calendar;

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
