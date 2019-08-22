import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './core/redux/store'

import { machineActions } from './core/redux/machine/index'
import { cashierActions } from './core/redux/cashier/index'
import { walletAction } from './core/redux/wallet/index'
import { analyticsActions } from './core/redux/analytics/index'
import { vendingMachine } from './core/api/index'
import { cashier } from './core/api/index'
import { wallet } from './core/api/index'
import { config, PRODUCTS } from './core/config/config'
import Root from './views/root';

vendingMachine.loadProduct(config.RACKS.A, 0, PRODUCTS.CANDY, 10);
vendingMachine.loadProduct(config.RACKS.A, 1, PRODUCTS.CHIPS, 10);
vendingMachine.loadProduct(config.RACKS.A, 2, PRODUCTS.COKE, 10);
vendingMachine.loadProduct(config.RACKS.B, 0, PRODUCTS.CHIPS, 10);
vendingMachine.loadProduct(config.RACKS.B, 1, PRODUCTS.COKE, 10);
vendingMachine.loadProduct(config.RACKS.B, 2, PRODUCTS.CANDY, 10);
vendingMachine.loadProduct(config.RACKS.B, 3, PRODUCTS.CANDY, 10);


const rootElement = document.getElementById('root');


const store = configureStore();

store.dispatch(machineActions.updateData(vendingMachine.getMachineData()));
store.dispatch(cashierActions.updateData());
store.dispatch(walletAction.updateData());

const onCashierSuccessMessage = (message) => {
  store.dispatch(cashierActions.updateData());
  store.dispatch(analyticsActions.sendSuccessEvent(message));
};
cashier.addSuccessListener(onCashierSuccessMessage);

const onWalletSuccessMessage = (message) => {
    store.dispatch(walletAction.updateData());
    store.dispatch(analyticsActions.sendSuccessEvent(message));
  };  
wallet.addSuccessListener(onWalletSuccessMessage);

function render(Root) {
  ReactDOM.render(
      <Root store={store} />, rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}

render(Root);