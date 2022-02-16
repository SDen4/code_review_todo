import React from 'react';
import { useDispatch } from 'react-redux';

import { delTodo } from '../../store/TodoReducer/actions';

import { TodoType } from './types';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<TodoType> = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(delTodo(todo.id));
  };

  return (
    <li className={classes.wrapper}>
      <div className={classes.left}>
        <input type="checkbox" checked={todo.checked} />
        <h3>{todo.title}</h3>
      </div>

      <button onClick={deleteTodo}>Del</button>
    </li>
  );
};

export default TodoItem;
