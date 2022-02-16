import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { checkTodo, delTodo } from '../../store/TodoReducer/actions';

import { TodoType } from './types';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<TodoType> = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(delTodo(todo.id));
  };

  const checkTodoItem = () => {
    dispatch(checkTodo(todo.id));
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

      <button onClick={deleteTodo}>Del</button>
    </li>
  );
};

export default TodoItem;
