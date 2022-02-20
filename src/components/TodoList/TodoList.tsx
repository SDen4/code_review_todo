import React from 'react';
import { useSelector } from 'react-redux';

import { selectLoader } from '../../store/Todo/selectors/selector';

import Loader from '../Loader';
import TodoItem from '../TodoItem';

import { TodoListType } from './types';

const TodoList: React.FC<TodoListType> = ({ todos }) => {
  const loader = useSelector(selectLoader);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <ul>
          {todos.map((el) => (
            <TodoItem key={el.id} todo={el} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
