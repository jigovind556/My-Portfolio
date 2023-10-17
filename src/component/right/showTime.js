import React, { useState, useEffect } from 'react';
import './showTime.css';

const ShowTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Updated the interval to 1 second (1000 ms)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = time.toLocaleDateString();

  return (
    <div className="show-time">
      <div className="time-r">{formattedTime}</div>
      <div className="date">{formattedDate}</div>
    </div>
  );
};

export default ShowTime;
