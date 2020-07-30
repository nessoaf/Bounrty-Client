//require mon
const mongoose = require('mongoose')
const { Module } = require('module')
const { Bounty } = require('.')

//create schema
const bountySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
    },
    wantedFor: {
        type: String,
        required: true
    },
    client: {
        type: String,
        default: 'Anonymous'
    },
    ship: String,
    reward: {
        type: Number,
        default: 1000,
    },
    hunters: Array,
    captured: {
        type: Boolean,
        default: false,
    },
    lastSeen: String
})
//crearew and export model
module.exports = mongoose.model('Bounty', bountySchema)