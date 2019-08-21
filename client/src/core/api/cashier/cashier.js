/* eslint-disable no-undef, no-console */
import { COINS } from '../../config/config';
import { createMessage } from '../utils/message';

class Cashier {
    constructor() {

        this.data = {
            balance: 0
        };

        this.pocket = {};
        Object.keys(COINS).map((coin) => {
            this.pocket[coin] = 0;
        });

        this.successListeners = [];
        this.failureListerers = [];
        this.acceptCoins = [COINS.OnePenny, COINS.TwoPenny, COINS.FivePenny
            , COINS.TenPenny, COINS.TwentyPenny, COINS.FiftyPenny
            , COINS.OnePound, COINS.TwoPound]
    }

    getMachineData() {
        let data = {};
        Object.keys(this.pocket).forEach((coinType) => {
            data[coinType] = this.pocket[coinType]
        });

        return data;
    }

    loadCoins(coinType, quantity) {
        try {
            this.pocket[coinType] = quantity;
        } catch (e) {
            console.log('err', e);
            return false;
        }
    }

    getCoinsByIndex(coinsType) {
        try {

            return this.pocket[coinsType];
        } catch (e) {
            console.log('err', e);
            return false;
        }
    }

    giveCoins(coinType, quantity) {
        try {
            let final = this.pocket[coinType] - quantity;
            final >= 0 ? this.pocket[coinType] = final : console.error("Not enough money");
            return final >= 0;
        } catch (e) {
            console.log('err', e);
            return false;
        }
    }

    addSuccessListener(listener) {
        this.successListeners.push(listener);
    }

    addFailureListener(listener) {
        this.failureListerers.push(listener);
    }

    publishSuccess(message) {
        this.successListeners.forEach((listener) => listener(message))
    }

    publishFailure(message) {
        this.failureListerers.forEach((listener) => listener(message))
    }

    insertCoin(coin) {
        if (this.acceptCoins.indexOf(coin) > -1) {
            this.data.balance += coin.value;
            this.pocket[coin.TYPE] += 1;
            this.publishSuccess(createMessage('Coin accepted', coin))

        } else {
            this.publishFailure(createMessage('Coin was rejected', coin))
        }
    }

    resetBalance() {
        if (this.data.balance > 0) {
            let bl = this.data.balance;
            this.data.balance = 0;
            this.calculateChange(bl);
            this.publishSuccess(createMessage('Changes Returned', bl))
        } else {
            this.publishFailure(createMessage('No changes found', this.data.balance))
        }
    }

    calculateChange(toReturn){
        let total = 0;
        let coins = this.pocket;
        let general = COINS;
        var items = Object.keys(this.pocket).map(function(key) {
            return [key, coins[key]];
          });
        items.sort(function(first, second) {
                return general[second[0]].value - general[first[0]].value;
            })
            .forEach((coinType) => {
                for (let index = 0; index < coins[coinType[0]]; index++) {
                    if (coins[coinType[0]] > 0 && general[coinType[0]].value + total < toReturn){
                        coins[coinType[0]]-=1;
                        total += general[coinType[0]].value;
                    }
                }
            });
        this.pocket = coins;
    }

    getData() {
        let balance = this.data.balance;
        let coins = this.pocket;
        return new Promise((resolve) => {
            // call to the hardware or something else, resolve with the data if OK, reject if not
            resolve({
                coins,
                balance
            })
        });
    }

    pay(value) {
        return new Promise((resolve, reject) => {
            // call to the payment api or something else, response with new balance if OK, with error if not
            if (this.data.balance >= value) {
                this.data.balance -= value;
                resolve(createMessage('Payment was accepted', this.data))
            } else {
                reject(createMessage('Not enough Money', this.data))
            }
        });
    }
}

/**
 * export as singleton
 * @type {Cashier}
 */
export let cashier = new Cashier();