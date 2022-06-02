const baseURL = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/events';

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
      .then((events) =>
          events.map(({dateFrom, dateTo, ...event }) => ({
            dateFrom: new Date(dateFrom),
            dateTo: new Date(dateTo),
            ...event,
          })),
      );
};

export const deleteEvent = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      alert('Failed to delete');
    }
  });
};









export default events;
