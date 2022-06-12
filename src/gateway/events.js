const URL = 'https://61b8210264e4a10017d18dc6.mockapi.io/events';

export const fetchEvents = () => {
  return fetch(URL)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Internal Server Error. Cannot display events');
    })
    .then(events =>
      events.map(({ _id, dateFrom, dateTo, ...event }) => ({
        id: _id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...event,
      })),
    );
};

export const createEvent = events =>
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(events),
  });

export const deleteEvent = id =>
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
