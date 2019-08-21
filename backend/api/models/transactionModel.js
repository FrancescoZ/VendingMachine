'use strict';
var mongoose = require('mongoose');
var transactionScema = new mongoose.Schema({
  action: { 
    type: String,
    required: true,
    },
  value: {
      type: String,
      default: "None",
      required: true
    },
  timestamp: {
      type:Date,
      required: true,
      default: Date.now()
    },
});
mongoose.model('Transaction', transactionScema);
