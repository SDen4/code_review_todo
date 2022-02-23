import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { todoDelReq, todoCheckReq } from '../../store/Todo/ducks';

import { TodoType } from './types';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<TodoType> = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(todoDelReq(todo.id));
  };

  const checkTodoItem = () => {
    dispatch(todoCheckReq(todo.id));
  };

  return (
    <li className={classes.wrapper}>
      <div className={classes.left}>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={checkTodoItem}
        />
        <h3 className={clsx(todo.checked && classes.checked)}>{todo.title}</h3>
      </div>

      <div className={classes.right}>
        <img src={todo.pic} alt="todoImage" />
        <button onClick={deleteTodo}>Del</button>
      </div>
    </li>
  );
};

export default TodoItem;
