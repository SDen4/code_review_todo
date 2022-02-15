import React from 'react';

import Input from '../Input';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Code review todo</h1>
        <Input />
      </header>
      <div className={classes.line} />
    </div>
  );
}

export default App;
