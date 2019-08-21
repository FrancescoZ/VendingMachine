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

export function* loadChange ( { payload }) {
    try {
      let coin = payload;
      let data = yield call([cashier, cashier.loadCoins], coin.TYPE,1); //call with context binding
      yield put(cashierActions.setDisplayData(data));
    } catch (e) {
      console.log('err',e);
    }
  }

  export function* resetBalance () {
    try {
      let data = yield call([cashier, cashier.resetBalance]); //call with context binding
      yield put(cashierActions.setDisplayData(data));
    } catch (e) {
      console.log('err',e);
    }
  }

// Watchers

export function* watchGetData() {
  yield* takeEvery(cashierActions.GET_DATA, getData);
}
export function* watchResetBalance() {
    yield* takeEvery(cashierActions.RESET_BALANCE, resetBalance);
  }
  
export function* watchLoadChange() {
    yield* takeEvery(cashierActions.LOAD_CHANGE, loadChange);
  }

// Root saga
export const cashierSagas = [
  fork(watchGetData),
  fork(watchLoadChange),
  fork(watchResetBalance),
];