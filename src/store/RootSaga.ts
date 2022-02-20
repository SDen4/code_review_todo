import { fork, all } from 'redux-saga/effects';

import { rootSaga as todosSaga } from './Todo/sagas/saga';

export default function* rootSaga() {
  yield all([fork(todosSaga)]);
}
