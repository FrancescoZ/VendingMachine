'use strict';
var mongoose = require('mongoose'),
    error = require('../utils/error'),
    Transaction = mongoose.model('Transaction'),
    config = require('../../config');

exports.showLog = function (req, res, next) {
    Transaction.find({
        "timestamp": { $gte: '1987-10-19', $lte: new Date() }
    }, function (err, transactions) {
        if (err)
            return error.error(err.message, res);
        res.json(transactions);
        next();

    });
};

exports.log = function (actionType, data) {
    var transaction = {
        action: actionType,
        value: data,
        timestamp: new Date()
    };
    Transaction.create(transaction,function (err, t) {
        if (err) 
          return error.error(err.message,res);
        else 
          return;
      });
};


