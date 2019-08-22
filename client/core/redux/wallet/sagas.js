/* eslint-disable no-console */

import { put, fork, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { walletAction } from './index'
import { wallet } from '../../api/index'

export function* getData () {
  try {
    let data = yield call([wallet, wallet.getData]); //call with context binding
    yield put(walletAction.setDisplayData(data));
  } catch (e) {
    console.log('err',e);
  }
}

export function* getChanges ( { payload }) {
    try {
      let data = yield call([wallet, wallet.getChanges],payload.value); //call with context binding
      yield put(walletAction.setDisplayData(data));
    } catch (e) {
      console.log('err',e);
    }
  }
  

// Watchers

export function* watchGetData() {
  yield* takeEvery(walletAction.GET_DATA, getData);
}

export function* watchGetChanges() {
    yield* takeEvery(walletAction.GET_CHANGES, getChanges);
  }
  
// Root saga
export const walletSagas = [
  fork(watchGetData),
  fork(watchGetChanges),
];