import React, { useState, useEffect } from 'react';

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(intervalID);
  }, []);

  return <div>{currentTime.toLocaleTimeString('en-US', { timeZone: 'Europe/Paris', hour12: false })}</div>;
};

export default CurrentTime;
