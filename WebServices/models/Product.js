const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    itemname: {
      type: String,
    },

    price: {
      type: String,
    },

    discount: {
      type: String,
    },

    category: {
      type: String,
    },

    description: {
      type: String,
    },
    image: {
      type: String,
    },

    uId: {
      type: String
    }
  },
  { timesamps: true }
);

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
