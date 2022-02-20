import { put, takeEvery, select } from 'redux-saga/effects';

import { todoAddReq, todoDelReq, todoCheckReq, todoUpdateListSuccess } from '../ducks/duck';
import { selectTodosList } from '../selectors/selector';
import { TodoItemType } from '../types';
import { API } from '../../../utils/api';

async function getUserPic(randomUser: string) {
  const response = await API.get(randomUser).then((res) => res.data);
  return response;
}

function* addTodoWorker(action: any) {
  try {
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
      type: todoUpdateListSuccess.toString(),
      payload: { todos },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

function* deleteTodoWorker(action: any) {
  const { payload } = action;
  let todos: TodoItemType[] = yield select(selectTodosList);
  todos = todos.filter((el) => el.id !== payload);

  yield put({
    type: todoUpdateListSuccess.toString(),
    payload: { todos },
  });
}

function* checkTodoWorker(action: any) {
  const { payload } = action;
  let todos: TodoItemType[] = yield select(selectTodosList);
  todos = todos.map((el) => (el.id === payload ? { ...el, checked: !el.checked } : el));

  yield put({
    type: todoUpdateListSuccess.toString(),
    payload: { todos },
  });
}

export function* rootSaga() {
  yield takeEvery(todoAddReq, addTodoWorker);
  yield takeEvery(todoDelReq, deleteTodoWorker);
  yield takeEvery(todoCheckReq, checkTodoWorker);
}