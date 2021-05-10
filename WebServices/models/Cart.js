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

    size:{
      type: String
    },

    quantity:{
      type:String
    },
<<<<<<< Updated upstream

    cusId:{
      type: String
  }
=======
    
>>>>>>> Stashed changes

},{ timesamps: true})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = {Cart}