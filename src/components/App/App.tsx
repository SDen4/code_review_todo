import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectTodosList,
  selectError,
} from '../../store/Todo/selectors/selector';
import { selectCount } from '../../store/Counter/selectors/selector';

import Counter from '../Counter';
import Input from '../Input';
import TodoList from '../TodoList';

import classes from './App.module.css';
import { CustomSelect } from '../CustomSelect';

function App() {
  const todosList = useSelector(selectTodosList);
  const todosError = useSelector(selectError);

  const count = useSelector(selectCount);

  console.log('render app');

  return (
    <div className={classes.appWrapper}>
      <div>
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

        <Counter count={count} />

        <div className={classes.line} />

        <CustomSelect />
      </div>
    </div>
  );
}

export default App;
