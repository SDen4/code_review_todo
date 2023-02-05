import { fork, all } from 'redux-saga/effects';

import { rootSaga as todosSagaTodo } from './Todo/sagas/saga';
import { rootSaga as todosSagaCount } from './Counter/sagas/saga';
import { customSelectDataWatcher } from './CustomSelect/saga';

export default function* rootSaga() {
  yield all([
    fork(todosSagaTodo),
    fork(todosSagaCount),
    fork(customSelectDataWatcher),
  ]);
}
