import { put, takeEvery, select } from 'redux-saga/effects';

import { counterDecr, counterInc, counterUpd } from '../ducks';

import { selectCount } from '../selectors/selector';

function* incrementWorker() {
  let counter: number = yield select(selectCount);
  yield (counter += 1);

  yield put({
    type: counterUpd.toString(),
    payload: counter,
  });
}

function* decrementWorker() {
  let counter: number = yield select(selectCount);
  yield (counter -= 1);

  yield put({
    type: counterUpd.toString(),
    payload: counter,
  });
}

export function* rootSaga() {
  yield takeEvery(counterInc, incrementWorker);
  yield takeEvery(counterDecr, decrementWorker);
}
