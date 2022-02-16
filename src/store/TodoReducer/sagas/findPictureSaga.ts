import { put, takeEvery } from 'redux-saga/effects';

import { addTodo } from '../actions';

import { API } from '../../../utils/api';

import { TODO_FIND_PICTURE_SAGA } from '../constants';

import { FindPictureSagaWorkerType, TodoItemType } from '../types';

async function getUserPic(randomUser: string) {
  const response = await API.get(randomUser).then((res) => res.data);
  return response;
}

function* sagaWorker(action: FindPictureSagaWorkerType) {
  try {
    const randomUser: string = yield `a${(Math.random() * 10).toFixed()}`;

    const { avatar_url } = yield getUserPic(randomUser);

    const newTodo: TodoItemType = yield {
      id: String(new Date().getTime()),
      title: action.newTodoTitle,
      checked: false,
      pic: avatar_url,
    };

    yield put(addTodo(newTodo));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* findPictureSagaWatcher() {
  yield takeEvery(TODO_FIND_PICTURE_SAGA, sagaWorker);
}
