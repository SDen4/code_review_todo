import { fork, all } from 'redux-saga/effects';

import { findPictureSagaWatcher } from './TodoReducer/sagas/findPictureSaga';

export default function* rootSaga() {
  yield all([fork(findPictureSagaWatcher)]);
}
