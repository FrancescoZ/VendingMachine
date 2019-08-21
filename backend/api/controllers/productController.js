'use strict';
var mongoose = require('mongoose'),
  Station = mongoose.model('Stations'),
  JSON = require('circular-json'),
  error = require('../utils/error');

exports.update_station = function(req,res,next){
  Station.findOne({
    "_id": req.params.stationId,
    "user": req.params.userId
  }, function(err, station) {
    if (err)
      return error.error(err,res);
    station.state = req.body.state;
    station.battery = req.body.battery;
    station.name = req.body.name;
    station.save(station, function(err){
      if (err)
        return error.error(err.message,res);
      return res.json("Settings Updated for "+ station.name+"\n");
    });
    
  });
}

exports.update_station_name = function(req,res,next){
  Station.findOne({
    "_id": req.params.stationId,
    "user": req.params.userId
  }, function(err, station) {
    if (err)
      return error.error(err.message,res);
    station.name = req.body.name;
    station.save(station, function(err){
      if (err)
        return error.error(err.message,res);
      return res.json("Settings Updated for "+ station.name+"\n");
    });
    
  });
}

exports.get_stations_by_user = function(req, res, next) {
    Station.find({
        "user" : req.params.userId
      },
      function(err, stations){
        if (err)
          return error.error(err.message,res);
        return res.json(stations);
      });
  };

exports.new_station = function(req, res, next){
    if (req.body.name &&
        req.params.userId) {
        var station = {
            name: req.body.name,
            user: req.params.userId
            }
        Station.create(station,function (err, station) {
          if (err) 
            return error.error(err.message,res);
          else 
            return res.json("Station added");
        });
    } else 
       return error.error('Missing values',res);
};

exports.hearthbeat = function(req,res,next){
    if (req.body.id){
        var station = {
            id: req.body.id
            }
        
    } else 
       return error.error('Missing values',res);
}

exports.delete_station = function(req, res, next) {
    Station.remove({
    _id: req.params.stationId
  }, function(err, station) {
    if (err)
      return error.error(err.message,res);
     return res.json({ message: 'Station successfully deleted' });
  });
};