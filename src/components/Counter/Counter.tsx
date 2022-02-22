import React from 'react';
import { useDispatch } from 'react-redux';

import { counterDecr, counterInc } from '../../store/Counter/ducks/duck';

import { counterType } from './types';

import classes from './Counter.module.css';

const Counter: React.FC<counterType> = ({ count }) => {
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(counterDecr());
  };

  const increment = () => {
    dispatch(counterInc());
  };

  return (
    <div className={classes.counterContainer}>
      <h2>Counter</h2>
      <div className={classes.counterWrapper}>
        <button type="button" onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
