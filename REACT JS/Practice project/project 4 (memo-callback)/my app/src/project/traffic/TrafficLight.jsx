import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('green');

  useEffect(() => {
    let timer;
    if (currentLight === 'green') {
      timer = setTimeout(() => setCurrentLight('yellow'), 3000);
    } else if (currentLight === 'yellow') {
      timer = setTimeout(() => setCurrentLight('red'), 1000);
    } else if (currentLight === 'red') {
      timer = setTimeout(() => setCurrentLight('green'), 2000);
    }

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
        border: '5px solid black',
        width: '150px',
        margin: '150px',
      }}
    >
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: currentLight === 'green' ? 'green' : 'grey',
          margin: '10px auto',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: currentLight === 'yellow' ? 'yellow' : 'grey',
          margin: '10px auto',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: currentLight === 'red' ? 'red' : 'grey',
          margin: '10px auto',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default TrafficLight
