'use strict';
var mongoose = require('mongoose'),
  Sensor = mongoose.model('Sensors'),
  error = require('../utils/error');

exports.update_sensor = function(req,res,next){
    Sensor.findOne({
        "_id": req.params.sensorId,
        "user": req.params.userId
    }, function(err, sensor) {
        if (err)
            return error.error(err.message,res);

        station.state = req.body.state;
        station.battery = req.body.battery;
        station.name = req.body.name;

        sensor.save(sensor, function(err){
        if (err)
            return error.error(err.message,res);
        res.json("Settings Updated for "+ sensor.name+"\n");
        next();
        });
        
    });
}

exports.pair = function(req, res, next){
    Sensor.findOne({
        "_id": req.params.sensorId,
        "user": req.params.userId
    }, function(err, sensor) {
        if (err)
            return error.error(err.message,res);

        sensor.station = req.params.stationId;

        sensor.save(sensor, function(err){
        if (err)
            return error.error(err.message,res);
        res.json("Sensor connected to station");
        next();
        });
        
    });
}

exports.get_sensor_by_user = function(req, res, next) {
    Sensor.find({
        "user" : req.params.userId
      },
      function(err, sensors){
        res.json(sensors);
        next();
      });
}

exports.get_sensor_by_station = function(req, res, next) {
    Sensor.find({
        "station" : req.params.stationId,
        "active" : false
      },
      function(err, sensors){
        res.json(sensors);
      });
}

exports.new_sensor = function(req, res, next){
    if (req.body.name &&
        req.params.userId) {
        var sensor = {
            name: req.body.name,
            user: req.params.userId
            }
        Sensor.create(sensor,function (err, sensor) {
          if (err) 
            return error.error(err.message,res);
          else 
            return res.json("Sensor added");
        });
    } else 
       return error.error('Missing values',res);
}

exports.delete_sensor = function(req, res, next) {
    Sensor.remove({
    _id: req.params.sensorId
  }, function(err, sensor) {
    if (err)
      return error.error(err.message,res);
    res.json({ message: 'Sensor successfully deleted' });
  });
};