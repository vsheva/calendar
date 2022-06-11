const baseURL = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/events';

/*
const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2020, 8, 15, 10, 15),
    dateTo: new Date(2020, 8, 15, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2020, 8, 16, 10, 15),
    dateTo: new Date(2020, 8, 16, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2020, 8, 17, 10, 30),
    dateTo: new Date(2020, 8, 17, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2020, 8, 25, 10, 30),
    dateTo: new Date(2020, 8, 25, 11, 0),
  },
];
*/



export const createEvent = events =>
    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(events),
    }).then(response => {
      if (!response.ok) {
        alert('Failed to create event');
      }
    });

export const fetchEvents = () => {
  return fetch(baseURL)
      .then(response => {
        if (!response.ok) {
          alert('Server Error. Cannot display events');
        }
        return response.json();
      })
      .then(events =>{
          console.log('events:', events[0])
          return events.map(({ dateFrom, dateTo, ...event }) => ({
              ...event,
              dateFrom: new Date(dateFrom),
            dateTo: new Date(dateTo),

          }))},
      );
};

export const deleteEvent = id => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      alert('Failed to delete');
    }
  });
};





/*
export const fetchEvents=()=> {
  return fetch(baseURL)
      .then(response => {
        if(response.ok) {
          return response.json()
        } throw new Error("Internal Server Error. Can't display events")
      }).then(events =>
          events.map(({ id, dateFrom, dateTo, ...rest }) => ({
            id: id,
            dateFrom: new Date(dateFrom),
            dateTo: new Date(dateTo),
            ...rest,
          })),
      )
      .catch((err)=> err.message)
}


export const createEvent =(events) =>
    fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body:JSON.stringify(events)
    }).then(response => {
  if(response.ok) {
    return response.json()
  } throw new Error("Internal Server Error. Can't display events")
}).catch((err)=> err.message)



export const updateEvents = (taskId, taskData) =>
    fetch(`${baseURL}/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(taskData)
    }).then(response => {
      if(response.ok) {
        return response.json()
      } throw new Error("Internal Server Error. Can't display events")
    }).catch((err)=> err.message)


export const deleteEvent=(taskId)=>
    fetch(`${baseURL}/${taskId}`, {
      method: 'DELETE',
    })

export default events;
*/









/*
export function createEvent(event) {
  event.preventDefault();
  const fieldEl = [...document.querySelectorAll('.event-form__field')].map(el => el.value);
  const [title, date, startTime, endTime, description] = fieldEl;

  return postEvent({
    title,
    description,
    dateFrom: new Date(`${date} ${startTime}`),
    dateTo: new Date(`${date} ${endTime}`),
  });
}*/





