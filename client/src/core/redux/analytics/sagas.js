/* eslint-disable */
import { put, fork, call } from 'redux-saga/effects'
import { ANALYTICS_EVENT_TYPES, config } from '../../config/config'
import { takeEvery } from 'redux-saga'
import { analyticsActions } from './index'

export function* sendData ({ payload }) {

  let { type, message } = payload;

//TODO: send data to analytics api
  switch (type) {
    case ANALYTICS_EVENT_TYPES.SUCCESS:
      console.log(`MACHINE_ID: ${config.MACHINE_ID}`, type, message, new Date());
      break;

    case ANALYTICS_EVENT_TYPES.ERROR:
      console.log(`MACHINE_ID: ${config.MACHINE_ID}`, type, message, new Date());
      break;

    default:
      break
  }

}


// Watchers

export function* watchSendRequest() {
  yield* takeEvery(analyticsActions.SEND_DATA, sendData);
}


// Root saga
export const analyticsSagas = [
  fork(watchSendRequest),
];