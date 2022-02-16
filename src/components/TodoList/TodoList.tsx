import React from 'react';

import TodoItem from '../TodoItem';

import { TodoListType } from './types';

const TodoList: React.FC<TodoListType> = ({ todos }) => {
  return (
    <ul>
      {todos.map((el) => (
        <TodoItem key={el.id} todo={el} />
      ))}
    </ul>
  );
};

export default TodoList;
