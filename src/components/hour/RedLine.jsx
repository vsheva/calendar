import React, { useEffect, useState } from 'react';

export const RedLine = ({ setHours }) => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    if (minutes === 60) {
      setHours(prev => prev + 1);
      setMinutes(0);
    }
    const interval = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div style={{ top: minutes }} className="red-line" />;
};
