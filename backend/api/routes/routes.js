'use strict';
var error = require('../utils/error'),
    productRoute = require('./productRoute'),
    stateRoute = require('./stateRoute'),
    transactionRoute = require('./transactionRoute'),
    cors = require('cors');

   

module.exports = function(app) {
    app.use(cors({origin: '*'}));
    productRoute(app);
    stateRoute(app);
    transactionRoute(app);
};