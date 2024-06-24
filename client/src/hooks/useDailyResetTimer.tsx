import { useState, useEffect } from 'react';

export const useDailyResetTimer = () => {
  const getTimeRemaining = () => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0); // Set to the next midnight
    const total = nextMidnight.getTime() - now.getTime(); // Ensure the result is a number
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / (1000 * 60)) % 60);
    const secs = Math.floor((total / 1000) % 60);
    return {
      total,
      hours,
      mins,
      secs,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = getTimeRemaining();
      setTimeRemaining(remainingTime);
      if (remainingTime.total <= 0) {
        setTimeRemaining(getTimeRemaining()); // Reset the timer
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeRemaining;
};
