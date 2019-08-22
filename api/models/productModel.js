'use strict';
var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    expireDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    quantity: {
      type: Number,
      default: 0,
      required: true
    },
  });

  module.exports = mongoose.model('Product', ProductSchema);