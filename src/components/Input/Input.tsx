import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../store/TodoReducer/actions';
import { TodoItemType } from '../../store/TodoReducer/types';

import classes from './Input.module.css';

const Input: React.FC = () => {
  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState<string>('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const onBtnClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!newTodoText) return;

    const newTodo: TodoItemType = {
      id: String(new Date().getTime()),
      title: newTodoText,
      checked: false,
    };

    dispatch(addTodo(newTodo));
    setNewTodoText('');
  };

  return (
    <div className={classes.inputWrapper}>
      <form onSubmit={onBtnClick}>
        <input type="text" value={newTodoText} onChange={onChangeInput} />
      </form>
      <button type="button" onClick={onBtnClick}>
        Add
      </button>
    </div>
  );
};

export default Input;
