const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const WalletSchema = new Schema({
    saldo:Number,
}, {
        toJSON: {
            virtuals: true
        },
        toObject:{
            virtuals: true
        }
    }
);

module.exports = model('Users', WalletSchema);