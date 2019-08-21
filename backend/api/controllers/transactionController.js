'use strict';
var mongoose = require('mongoose'),
  error = require('../utils/error'),
  Station = mongoose.model('Stations'),
  config = require('../../config'),
  jwt = require('jsonwebtoken');

exports.authenticate_station = function(req, res, next) {
    if (!req.body.stationId){
      return error.error('Credential are missing or invalid',res);
    }
    Station.authenticate(req.body.stationId, function(err,station){

      if (!station)
        return error.error('Wrong Credential',res);
      else{
        var token = generateAuth(req.id)
        return res.json({ success: true, message: token, userid: station._id});
      }

    });
    
};

function generateAuth(id){
  const payload = {
    data: id
  };
  var token = jwt.sign(payload, config.secret, {
    expiresIn: "1000 days"
  });
  return token
}
