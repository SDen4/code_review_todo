import React from 'react';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../store/RootReducer';
import { InitialStateType } from '../../store/TodoReducer/types';

import Input from '../Input';
import TodoList from '../TodoList';

import classes from './App.module.css';

function App() {
  const store = useSelector<AppStateType, InitialStateType>(
    (state) => state.todos,
  );

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Code review todo</h1>
        <Input />
      </header>

      <div className={classes.line} />

      <TodoList todos={store.todos} />
    </div>
  );
}

export default App;
