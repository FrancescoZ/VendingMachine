'use strict';
var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    transactionController = require('./transactionController'),
    error = require('../utils/error'),
    constants = require('../utils/constants');

exports.sellProduct = function (req, res, next) {
    Product.findOne({
        "name": req.params.name
    }, function (err, prod) {
        if (err)
            return error.error(err.message, res);
        if (prod.quantity == 0)
            return error.error("Not available", res);
        prod.quantity -= 1;
        prod.save(prod, function (err) {
            if (err)
                return error.error(err.message, res);
            transactionController.log(constants.SELL,
                prod);
            res.json("Product sold");
            next();
        });

    });
};

exports.insertProduct = function (req, res, next) {
    Product.findOne({
        "name": req.params.name
    }, function (err, prod) {
        console.log(err);
        if (err)
            return error.error(err.message, res);
        prod.quantity += 1;
        prod.save(prod, function (err) {
            if (err)
                return error.error(err.message, res);
            res.json("Product inserted");
            transactionController.log(constants.INSERT_PRODUCT,
                prod);
            next();
        });

    });
};

