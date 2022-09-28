import React, { useState } from 'react';
import './Counter.css'

function Counter({ size }) {
  const [counter, setCounter] = useState(0);
  let btnClass = `btn btn--${size}`;
  let btnClassSecondary = `btn btn--${size}`;

  const counterChangeValue = value => {
    setCounter(counter + value);
  };

  return (
    <div>
      <button onClick={() => {counterChangeValue(1)}} className={btnClass}>+</button>
      <span>{counter}</span>
      <button onClick={() => {counterChangeValue(-1)}} className={btnClassSecondary}>-</button>
    </div>
  );
};

export default Counter;
