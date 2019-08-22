'use strict';
module.exports = function (app) {
    var transaction = require('../controllers/transactionController');
    app.route('/logs')
        .get(transaction.showLog);
}


