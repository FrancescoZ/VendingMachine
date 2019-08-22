'use strict';
var mongoose = require('mongoose'),
    State = mongoose.model('State'),
    transactionController = require('./transactionController'),
    constants = require('../utils/constants'),
    error = require('../utils/error');

exports.insertMoney = function (req, res, next) {
    State.findOne({}, {}, { sort: { 'timestamp': -1 } },
        function (err, state) {
            if (err)
                return error.error(err.message, res);
            var s = {
                timestap: new Date(),
                balance: state.balance,
                TwoPound: state.TwoPound + req.params.TwoPound,
                OnePound: state.OnePound + req.params.OnePound,
                FiftyPens: state.FiftyPens + req.params.FiftyPens,
                TwentyPens: state.TwentyPens + req.params.TwentyPens,
                TenPens: state.TenPens + req.params.TenPens,
                FivePens: state.FivePens + req.params.FivePens,
                TwoPens: state.TwoPens + req.params.TwoPens,
                OnePens: state.OnePens + req.params.OnePens
            };
            s.balance += req.params.TwoPound * 2 +
                req.params.OnePound * 1
            req.params.FiftyPens * 0.50
            req.params.TwentyPens * 0.20
            req.params.TenPens * 0.10
            req.params.FivePens * 0.05
            req.params.TwoPens * 0.02
            req.params.OnePens * 0.01;
            Transaction.create(s, function (err, t) {
                if (err)
                    return error.error(err.message, res);
                    transactionController.log(constants.INSERT_MONEY,
                        t);
                    res.json(t);
                    next();
            });
            
        });

};

exports.addChange = function (req, res, next) {
    State.findOne({}, {}, { sort: { 'timestamp': -1 } },
        function (err, state) {
            if (err)
                return error.error(err.message, res);
            var s = {
                timestap: new Date(),
                balance: state.balance,
                TwoPound: state.TwoPound + req.params.TwoPound,
                OnePound: state.OnePound + req.params.OnePound,
                FiftyPens: state.FiftyPens + req.params.FiftyPens,
                TwentyPens: state.TwentyPens + req.params.TwentyPens,
                TenPens: state.TenPens + req.params.TenPens,
                FivePens: state.FivePens + req.params.FivePens,
                TwoPens: state.TwoPens + req.params.TwoPens,
                OnePens: state.OnePens + req.params.OnePens
            };
            Transaction.create(s, function (err, t) {
                if (err)
                    return error.error(err.message, res);
                else
                    return res.json(t);
            });
            next();
        });
};

exports.getChange = function (req, res, next) {
    State.findOne({}, {}, { sort: { 'timestamp': -1 } },
        function (err, state) {
            if (err)
                return error.error(err.message, res);
            var total = 0;
            var coins = createCoinDictionary(state);
            var coinsRef = createCoinDictionary(state);
            coins.forEach(function (coin) {
                for (let index = 1; index <= coinsRef[coin.key].number; index++) {
                    if (coins[coin.key].number > 0 &&
                        coins[coin.key].value + total <= state.balance) {
                        coins[coin.key].number -= 1;
                        total += coins[coin.key].value;
                    }
                }
            });
            var s = {
                timestap: new Date(),
                balance: 0,
                TwoPound: coins[TwoPound],
                OnePound: coins[OnePound],
                FiftyPens: coins[FiftyPens],
                TwentyPens: coins[TwentyPens],
                TenPens: coins[TenPens],
                FivePens: coins[FivePens],
                TwoPens: coins[TwoPens],
                OnePens: coins[OnePens]
            };
            Transaction.create(s, function (err, t) {
                if (err)
                    return error.error(err.message, res);
                    transactionController.log(constants.GET_CHANGE,
                        t);
                    return res.json(t);
                
            });
            next();
        });
};

exports.getState = function (req, res, next) {
    State.findOne({}, {}, { sort: { 'timestamp': -1 } },
        function (err, state) {
            if (err)
                return error.error(err.message, res);
            res.json(state);
            next();
        });
};

function createCoinDictionary(state) {
    var coins = [];
    coins.push({
        key: "TwoPound",
        value: {
            number: state.TwoPound,
            value: 2
        }
    });
    coins.push({
        key: "OnePound",
        value: {
            number: state.OnePound,
            value: 1
        }
    });
    coins.push({
        key: "FiftyPens",
        value: {
            number: state.FiftyPens,
            value: 0.5
        }
    });
    coins.push({
        key: "TwentyPens",
        value: {
            number: state.TwentyPens,
            value: 0.2
        }
    });
    coins.push({
        key: "TenPens",
        value: {
            number: state.TenPens,
            value: 0.1
        }
    });
    coins.push({
        key: "FivePens",
        value: {
            number: state.FivePens,
            value: 0.05
        }
    });
    coins.push({
        key: "TwoPens",
        value: {
            number: state.TwoPens,
            value: 0.02
        }
    });
    coins.push({
        key: "OnePens",
        value: {
            number: state.OnePens,
            value: 0.01
        }
    });
    return coins;
}