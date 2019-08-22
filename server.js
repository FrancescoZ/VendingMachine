import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  model= require('./api/models/models.js'),
  config = require('./config'),
  bodyParser = require('body-parser');
  
app.set('superSecret', config.secret);

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
;(async () => {
    mongoose.connect(config.database); 
});
//distribute webpackfiles
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add routing
var routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('VendingMachine RESTful API server started on: ' + port);