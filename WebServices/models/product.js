const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({

    
    itemname : {

        type:String
    },
    price : {

        type:String
    },
    discount : {

        type:String
    },
    category : {

        type:String
    },
   
    description : {

        type:String
    }
},{
    timesamps:true
});

const Product = mongoose.model('Product', productSchema);

module.exports = {Product}
