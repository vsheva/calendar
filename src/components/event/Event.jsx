import React, {useState} from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, removeEvent }) => {

    const [deleteBtnVisibility, setDeleteBtnVisibility] = useState(false);
    const eventStyle = {
        height,
        marginTop,
    };

    return (
        <>
            <div
                style={eventStyle}
                className="event"
                onClick={() => setDeleteBtnVisibility(!deleteBtnVisibility)}
            >
                <div className="event__title">{title}</div>
                <div className="event__time">{time}</div>
            </div>
            {deleteBtnVisibility && (
                <button style={{marginTop: height + marginTop}} className="delete-event-btn" onClick={() => removeEvent(id)}>
                    <i className="fas fa-trash-alt"></i>
                    <span>Delete</span>
                </button>
            )}
        </>
    );
};

export default Event;






/*const Event = ({ height, marginTop, title, time, id }) => {

    const eventStyle = {
        height,
        marginTop,
    };


    return (
        <div style={eventStyle} className="event" onClick={()=>console.log(id)}>
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
        </div>
    );
};

export default Event;*/
