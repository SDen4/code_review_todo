import React from 'react';

import classes from './Counter.module.css';

const Counter = () => {
  return (
    <div className={classes.counterContainer}>
      <h2>Counter</h2>
      <div className={classes.counterWrapper}>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  );
};

export default Counter;
