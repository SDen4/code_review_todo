import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectTodosList,
  selectError,
} from '../../store/Todo/selectors/selector';

import Input from '../Input';
import TodoList from '../TodoList';

import classes from './App.module.css';

function App() {
  const todosList = useSelector(selectTodosList);
  const todosError = useSelector(selectError);

  console.log('render app');

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Code review todo</h1>
        <Input />
      </header>

      <div className={classes.line} />

      {Boolean(todosList.length) ? (
        <TodoList todos={todosList} />
      ) : (
        <div className={classes.noTodos}>There's no todos yet...</div>
      )}

      {todosError && <div>Attention! Error!</div>}
    </div>
  );
}

export default App;
