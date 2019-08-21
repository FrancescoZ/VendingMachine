import { cashierSagas } from './cashier/index';
import { walletSagas } from './wallet/index';
import { machineSagas } from './machine/index';
import { analyticsSagas } from './analytics/index';

export default function* sagas() {
  yield [
    ...cashierSagas,
    ...walletSagas,
    ...machineSagas,
    ...analyticsSagas
  ];
}
