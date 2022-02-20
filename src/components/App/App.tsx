import React from 'react';
import { useSelector } from 'react-redux';

import { selectTodosList } from '../../store/Todo/selectors/selector';

import Input from '../Input';
import TodoList from '../TodoList';

import classes from './App.module.css';

function App() {
  const todosList = useSelector(selectTodosList);

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
    </div>
  );
}

export default App;
