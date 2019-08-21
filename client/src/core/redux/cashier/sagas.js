/* eslint-disable no-console */

import { put, fork, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { cashierActions } from './index'
import { cashier } from '../../api/index'

export function* getData () {
  try {
    let data = yield call([cashier, cashier.getData]); //call with context binding
    yield put(cashierActions.setDisplayData(data));
  } catch (e) {
    console.log('err',e);
  }
}


// Watchers

export function* watchGetData() {
  yield* takeEvery(cashierActions.GET_DATA, getData);
}


// Root saga
export const cashierSagas = [
  fork(watchGetData),
];