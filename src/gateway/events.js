const baseURL = 'https://62a62fc5b9b74f766a44f273.mockapi.io/api/v1/events';
export const fetchEvents = () => {
  return fetch(baseURL)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Internal Server Error. Cannot display events');
    })
    .then(events =>
      events.map(({ _id, dateFrom, dateTo, ...rest }) => ({
        id: _id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...rest,
      })),
    );
};

export const createEvent = (events) =>
  fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(events),
  });

export const deleteEvent = id =>
  fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  });
