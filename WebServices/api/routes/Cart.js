const express = require('express');
//const { default: Product } = require('../../src/components/Product');
const router = express.Router();
const {Product} = require("../../models/Product");

const {Cart} = require("../../models/Cart");
const { deleteModel } = require('mongoose');



//get method to fetch data from products
<<<<<<< Updated upstream
router.get('/displayProduct/', function(req,res){
=======
router.get('/displayProduct', function(req,res){
>>>>>>> Stashed changes
  Product.find({})
  .exec(function(err, products){
      if(err) {
          console.log('error')
      }else {
          res.json(products);
      }
  });
});

//get method to fetch data from products
router.get('/display/:id', function(req,res){
  Product.find({_id: req.params.id})
  .exec(function(err, products){
      if(err) {
          console.log('error')
      }else {
          res.json(products);
      }
  });
});

//post method to save data in cart
<<<<<<< Updated upstream
router.post("/insertCart/:uid", (req, res) => {
=======
router.post("/insertCart", (req, res) => {
>>>>>>> Stashed changes

  //save data got from the client into the carts collection in the DB
  const cart = new Cart(req.body)

      cart.save((err) => {
          if(err) return res.status(400).json({ success: false, err})
          return res.status(200).json({ success: true})
      })
});


//get method to fetch data from cart
<<<<<<< Updated upstream
router.get('/:uid', function(req,res){
  console.log('get requests for all cart');
  Cart.find({cusId: req.params.uid})
=======
router.get('/', function(req,res){
  console.log('get requests for all cart');
  Cart.find()
>>>>>>> Stashed changes
  .exec(function(err, carts){
      if(err) {
          console.log('error')
      }else {
          res.json(carts);
      }
  });
});

//delete from database
router.post('/delete/:id',function (req,res){
  Cart.deleteOne({_id: req.params.id},function(err,Cart){
    if(err)
    res.json(err);
    else
    res.json("Successfully Deleted");
  });
});

//delete table from database
router.post('/deleteTable',function (req,res){
  Cart.deleteMany({}, function(error, result){
    if(error)
      res.json(error);
    else
      res.json("success");
  })
});

// Defined edit route
router.get('/edit/:id', function (req, res) {
  let id = req.params.id;
  Cart.findById(id, function (err, cart){
      res.json(cart);
  });
});

  //update method
  router.post('/update/:id', function (req, res) {
    Cart.findById(req.params.id, function(err, cart) {
    if (!cart)
      res.status(404).send("data is not found");
    else {
        cart.size = req.body.size;
        cart.quantity = req.body.quantity;

        cart.save().then(cart => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
  });


  //get method to search
<<<<<<< Updated upstream
router.get('/', function(req,res){
=======
router.get('/getProducts', function(req,res){
>>>>>>> Stashed changes
  console.log('get requests for all products');
  Product.find({})
  .exec(function(err, products){
      if(err) {
          console.log('error')
      }else {
          res.json(products);
      }
  });
});
module.exports = router;