const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = mongoose.Schema({
    itemname: {
        type: String
    },

    price:{
        type: String
    },

    discount: {
        type: String
    },

    category:{
      type: String
    },
    
    quantity:{
      type:String
    },   
    
    uId:{
      type:String
    }

},{ timesamps: true})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {Cart}