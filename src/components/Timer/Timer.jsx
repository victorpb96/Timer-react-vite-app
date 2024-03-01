import React, { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
  // Declare a state variable to store the seconds
  const [seconds, setSeconds] = useState(0);

  // Declare a state variable to store the timer status
  const [isRunning, setIsRunning] = useState(false);

  // Define a function to toggle the timer on and off
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Define a function to reset the timer to zero
  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // Use the useEffect hook to run a callback function every second
  useEffect(() => {
    // Declare a variable to store the timer ID
    let timerId;

    // If the timer is running, set the timer ID to call setSeconds every second
    if (isRunning) {
      timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Return a cleanup function to clear the timer ID
    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]); // Only re-run the effect if isRunning changes

  // Return the JSX code to render the timer component
  return (
    <div className="timer">
      <h1>{seconds} seconds</h1>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
