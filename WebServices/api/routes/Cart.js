const express = require('express');
//const { default: Product } = require('../../src/components/Product');
const router = express.Router();
const { Product } = require('../../models/Product');
const { Cart } = require('../../models/Cart');
const checkAuth = require('../middleware/check-auth');

//get method to fetch data from products
router.get('/displayProduct', checkAuth, function (req, res) {
  Product.find({}).exec(function (err, products) {
    if (err) {
      console.log('error');
    } else {
      res.json(products);
    }
  });
});

//get method to fetch data from products
router.get('/display/:id', checkAuth, function (req, res) {
  Product.find({ _id: req.params.id }).exec(function (err, products) {
    if (err) {
      console.log('error');
    } else {
      res.json(products);
    }
  });
});

//post method to save data in cart
router.post('/insertCart', checkAuth, (req, res) => {
  //save data got from the client into the carts collection in the DB
  const cart = new Cart(req.body);

  cart.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//get method to fetch data from cart
router.get('/:id', checkAuth, function (req, res) {
  Cart.find({ uId: req.params.id }).exec(function (err, carts) {
    if (err) {
      console.log('error');
    } else {
      res.json(carts);
    }
  });
});

//delete from database
router.post('/delete/:id', function (req, res) {
  Cart.deleteOne({ _id: req.params.id }, function (err, Cart) {
    if (err) res.json(err);
    else res.json('Successfully Deleted');
  });
});

// Defined edit route
router.get('/edit/:id', checkAuth, function (req, res) {
  let id = req.params.id;
  Cart.findById(id, function (err, cart) {
    res.json(cart);
  });
});

//update method
router.post('/update/:id', function (req, res) {
  Cart.findById(req.params.id, function (err, cart) {
    if (!cart) res.status(404).send('data is not found');
    else {
      cart.quantity = req.body.quantity;

      cart
        .save()
        .then((cart) => {
          res.json('Update complete');
        })
        .catch((err) => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

//get method to search
router.get('/getProducts', checkAuth, function (req, res) {
  Product.find({}).exec(function (err, products) {
    if (err) {
      console.log('error');
    } else {
      res.json(products);
    }
  });
});
module.exports = router;
