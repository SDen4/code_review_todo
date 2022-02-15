import React from 'react';

import Input from '../Input';
import TodoList from '../TodoList';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Code review todo</h1>
        <Input />
      </header>

      <div className={classes.line} />

      <TodoList />
    </div>
  );
}

export default App;
