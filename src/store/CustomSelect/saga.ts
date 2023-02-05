import { put, takeEvery } from 'redux-saga/effects';

import { IItem, loadingCS, saveDataCS } from './reducer';

import { customSelectDataSaga } from './action';

import { data } from './data';

function* worker() {
  try {
    yield put(loadingCS(true));

    yield console.log(data);

    const newData: IItem[] = yield data.map((el) => ({
      id: el.lastName,
      name: el.lastName,
      value: el.age,
      disabled: false,
    }));

    yield put(saveDataCS(newData));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(loadingCS(false));
  }
}

export function* customSelectDataWatcher() {
  yield takeEvery(customSelectDataSaga, worker);
}
