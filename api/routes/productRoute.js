'use strict';
module.exports = function (app) {
    var
    products = require('../controllers/productController');

    app.route('/product')
        .put(products.insertProduct)
        .delete(products.sellProduct)
};