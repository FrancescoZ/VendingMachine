const express = require('express');
const path = require('path');
const app = express();

const webpack = require('webpack');
const webPackConfig = require('./webpack.config.js');

const compiler = webpack(webPackConfig);
app.use(require('webpack-dev-middleware')(compiler, webPackConfig.devServer));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

const port = process.env.PORT || 3000;

// start app
app.listen(port, function onAppListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 🚧  Webpack development server listening on port %s', port);
        console.info('please wait for bundle build');
    }
});

module.exports.getApp = app;
