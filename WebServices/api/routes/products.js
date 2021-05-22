const express = require('express');
const productRoutes = express.Router();
const upload = require('../middleware/upload');
const multer = require('multer');
let { Product } = require('../../models/Product');

productRoutes.route('/add').post(upload.single('image'), (req, res) => {
  const itemname = req.body.itemname;
  const price = req.body.price;
  const discount = req.body.discount;
  const category = req.body.category;
  const description = req.body.description;
  const image = req.body.image;

  console.log(req.body);

  let product = new Product({
    itemname,
    price,
    discount,
    category,
    description,
    image,
  });
  if (req.file) {
    product.image = req.file.path;
  }
  product
    .save()
    .then((product) => {
      res.status(200).json({ message: 'Product added Succefully' });
      console.log(product);
    })
    .catch((err) => {
      res.status(200).send({ message: 'Please try again' });
    });
});

//get
productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, product) {
    if (err) console.log(err);
    else {
      res.json(product);
    }
  });
});

//delete
productRoutes.route('/delete/:id').post(function (req, res) {
  Product.deleteOne({ _id: req.params.id }, function (err, product) {
    if (err) res.json(err);
    else res.json('successfully removed');
  });
});
//edit

productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product) {
    res.json(product);
  });
});

//update

productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product) res.status(404).send('data is not found');
    else {
      product.itemname = req.body.itemname;
      product.price = req.body.price;
      product.discount = req.body.discount;
      product.category = req.body.category;
      product.description = req.body.description;
      product
        .save()
        .then((product) => {
          res.json('Update complete');
        })
        .catch((err) => {
          res.status(400).send('unable to update database ');
        });
    }
  });
});

module.exports = productRoutes;
