
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = mongoose.Schema({
    
    name: {
        type: String
    },

    email: {
        type: String
    },

    number: {
        type: String
    },

    date: {
        type: String
    },

    code: {
        type: String
    },

    amount: {
        type: String
    },

    uId: {
        type: String
    }
    
},{ timesamps: true})

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {Payment}