import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { findPictureSaga } from '../../store/TodoReducer/actionsSagas';

import classes from './Input.module.css';

const Input: React.FC = () => {
  const dispatch = useDispatch();
  const ref: any = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  const [newTodoText, setNewTodoText] = useState<string>('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const onBtnClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!newTodoText) return;

    dispatch(findPictureSaga(newTodoText));
    setNewTodoText('');
  };

  return (
    <div className={classes.inputWrapper}>
      <form onSubmit={onBtnClick}>
        <input
          type="text"
          value={newTodoText}
          onChange={onChangeInput}
          placeholder="Enter a new task"
          ref={ref}
        />
      </form>
      <button type="button" onClick={onBtnClick}>
        Add
      </button>
    </div>
  );
};

export default Input;
