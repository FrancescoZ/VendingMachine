import { combineReducers } from 'redux'
import { machineReducer } from './machine/index';
import { cashierReducer } from './cashier/index'
import { walletReducer } from './wallet/index'
import { infoDisplayReducer } from './info-display/index'

export default combineReducers({
  machine: machineReducer,
  cashier: cashierReducer,
  wallet: walletReducer,
  infoDisplay: infoDisplayReducer,
})