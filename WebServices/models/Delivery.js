const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = mongoose.Schema({
    name: {
        type: String
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    city: {
        type: String
    },

    zipcode: {
        type: String
    },

    address: {
        type: String
    },

},{ timesamps: true})

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = {Delivery}