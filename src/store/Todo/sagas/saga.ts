import { put, takeEvery, select } from 'redux-saga/effects';

import {
  todoAddReq,
  todoDelReq,
  todoCheckReq,
  todoUpdListSucc,
  todoUpdListErr,
  todoErrReq,
  todoLoading,
} from '../ducks/duck';
import { selectTodosList } from '../selectors/selector';
import { actionType, TodoItemType } from '../types';
import { API } from '../../../utils/api';

async function getUserPic(randomUser: string) {
  const response = await API.get(randomUser).then((res) => res.data);
  return response;
}

function* addTodoWorker(action: actionType) {
  try {
    yield put({
      type: todoLoading.toString(),
      payload: true,
    });

    const { payload } = action;
    const randomUser: string = yield `a${(Math.random() * 10).toFixed()}`;
    const { avatar_url } = yield getUserPic(randomUser);

    const newTodo: TodoItemType = yield {
      id: String(new Date().getTime()),
      title: payload,
      checked: false,
      pic: avatar_url,
    };

    let todos: TodoItemType[] = yield select(selectTodosList);
    todos = [...todos, newTodo];

    yield put({
      type: todoUpdListSucc.toString(),
      payload: { todos },
    });
    yield put({
      type: todoLoading.toString(),
      payload: false,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put({ type: todoUpdListErr.toString() });
  }
}

function* deleteTodoWorker(action: actionType) {
  const { payload } = action;
  let todos: TodoItemType[] = yield select(selectTodosList);
  todos = todos.filter((el) => el.id !== payload);

  yield put({
    type: todoUpdListSucc.toString(),
    payload: { todos },
  });
}

function* checkTodoWorker(action: actionType) {
  const { payload } = action;
  let todos: TodoItemType[] = yield select(selectTodosList);
  todos = todos.map((el) =>
    el.id === payload ? { ...el, checked: !el.checked } : el,
  );

  yield put({
    type: todoUpdListSucc.toString(),
    payload: { todos },
  });
}

function* errorTodoWorker() {
  yield put({
    type: todoUpdListErr.toString(),
    payload: true,
  });
}

export function* rootSaga() {
  yield takeEvery(todoAddReq, addTodoWorker);
  yield takeEvery(todoDelReq, deleteTodoWorker);
  yield takeEvery(todoCheckReq, checkTodoWorker);
  yield takeEvery(todoErrReq, errorTodoWorker);
}
