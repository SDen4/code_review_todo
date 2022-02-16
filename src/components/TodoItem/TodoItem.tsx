import React from 'react';

import classes from './TodoItem.module.css';
import { TodoType } from './types';

const TodoItem: React.FC<TodoType> = ({ todo }) => {
  return (
    <li className={classes.wrapper}>
      <div className={classes.left}>
        <input type="checkbox" checked={todo.checked} />
        <h3>{todo.title}</h3>
      </div>

      <button>Del</button>
    </li>
  );
};

export default TodoItem;
