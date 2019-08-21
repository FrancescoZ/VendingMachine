import { put, fork, call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { createMessage } from '../../api/utils/message'
import { machineActions } from './index'
import { infoDisplayActions } from '../info-display/index'
import { cashierActions } from '../cashier/index'
import { analyticsActions } from '../analytics/index'
import { vendingMachine } from '../../api/index'
import { cashier } from '../../api/index'

export function* purchase ({ payload }) {

  let { rackLiteral, slotIndex } = payload;

  let slotInfo = vendingMachine.getSlotDataByIndex(rackLiteral, slotIndex);

  if (slotInfo.quantity > 0) {
    try {
      let paymentRequest = yield call([cashier, cashier.pay], slotInfo.product.price); //call with context binding
      yield put(analyticsActions.sendSuccessEvent(paymentRequest));

      let giveProductRequest = yield call([vendingMachine, vendingMachine.giveProduct], rackLiteral, slotIndex); //call with context binding
      yield put(analyticsActions.sendSuccessEvent(giveProductRequest));

      let slotData = vendingMachine.getSlotDataByIndex(payload.rackLiteral, payload.slotIndex);
      yield put(machineActions.updateSlotData( rackLiteral, slotIndex, slotData ));
      yield put(cashierActions.updateData());
      yield put(infoDisplayActions.updateMessage(`Here! Take your ${slotInfo.product.title}`));

    } catch (errorMessage) {

      yield put(infoDisplayActions.updateMessage(errorMessage.message));
      yield put(analyticsActions.sendErrorEvent(errorMessage));

    }
  } else {
    yield put(analyticsActions.sendErrorEvent(createMessage('Slot is Empty', slotInfo)));
    yield put(infoDisplayActions.updateMessage('This product is sold out'));
  }
}


// Watchers

export function* watchPurchaseRequest() {
  yield* takeEvery(machineActions.PURCHASE_REQUEST, purchase);
}


// Root saga
export const machineSagas = [
  fork(watchPurchaseRequest),
];