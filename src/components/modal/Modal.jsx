import React, { useState } from 'react';

import moment from 'moment';
import { getDateTime } from '../../utils/dateUtils';
import { createEvent } from '../../gateway/events';
import './modal.scss';
import Form from "./Form";

const Modal = ({ children, closeModal}) => {
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => closeModal(false)}>
            +
          </button>
        </div>
        {children}

         {/* <Form getEvents={getEvents} closeModal/>*/}
      </div>
    </div>
  );
};

export default Modal;






























//<form className="event-form">
//   <input
//       type="text"
//       name="title"
//       placeholder="Title"
//       className="event-form__field"
//   />
//   <div className="event-form__time">
//     <input type="date" name="date" className="event-form__field" />
//     <input
//         type="time"
//         name="startTime"
//         className="event-form__field"
//         onChange={handleChange}
//     />
//     <span>-</span>
//     <input
//         type="time"
//         name="endTime"
//         className="event-form__field"
//     />
//   </div>
//   <textarea
//       name="description"
//       placeholder="Description"
//       className="event-form__field"
//   ></textarea>
//   <button type="submit" className="event-form__submit-btn">
//     Create
//   </button>
// </form>

// class Modal extends Component {
//
//   render() {
//     return (
//       <div className="modal overlay">
//         <div className="modal__content">
//           <div className="create-event">
//             <button className="create-event__close-btn">+</button>
//             <form className="event-form">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 className="event-form__field"
//               />
//               <div className="event-form__time">
//                 <input type="date" name="date" className="event-form__field" />
//                 <input
//                   type="time"
//                   name="startTime"
//                   className="event-form__field"
//                   onChange={this.handleChange}
//                 />
//                 <span>-</span>
//                 <input
//                   type="time"
//                   name="endTime"
//                   className="event-form__field"
//                 />
//               </div>
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 className="event-form__field"
//               ></textarea>
//               <button type="submit" className="event-form__submit-btn">
//                 Create
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

//export default Modal;
