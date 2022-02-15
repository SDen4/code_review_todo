import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem: React.FC = () => {
  return (
    <li className={classes.wrapper}>
      <div className={classes.left}>
        <input type="checkbox" />
        <h3>Todo title</h3>
      </div>

      <button>Del</button>
    </li>
  );
};

export default TodoItem;
