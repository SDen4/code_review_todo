import React from 'react';

import classes from './Input.module.css';

const Input: React.FC = () => {
  return (
    <div className={classes.inputWrapper}>
      <input type="text" />
      <button type="button">Add</button>
    </div>
  );
};

export default Input;
