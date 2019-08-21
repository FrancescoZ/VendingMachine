'use strict';
var mongoose = require('mongoose');
var StateSchema = new mongoose.Schema({
    timestap: {
        type: Date,
        unique: true,
        required: true,
        trim: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    TwoPound: {
        type: Number,
        default: 0,
        required: true
    },
    OnePounf: {
        type: Number,
        default: 0,
        required: true
    },
    FiftyPens: {
        type: Number,
        default: 0,
        required: true
    },
    TwentyPens: {
        type: Number,
        default: 0,
        required: true
    },
    TenPens: {
        type: Number,
        default: 0,
        required: true
    },
    FivePens: {
        type: Number,
        default: 0,
        required: true
    },
    TwoPens: {
        type: Number,
        default: 0,
        required: true
    },
    OnePens: {
        type: Number,
        default: 0,
        required: true
    },

});

module.exports = mongoose.model('State', StateSchema);