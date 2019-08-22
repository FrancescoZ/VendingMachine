'use strict';
module.exports = function (app) {
    var state = require('../controllers/stateController');
    app.route('/state')
        .get(state.getState);
    app.route('/money')
        .delete(state.getChange)
        .put(state.insertMoney);
    app.route('/change')
        .get(state.getChange)
        .put(state.addChange);

}