const router = require('express').Router();
let Product = require('../models/Product');


//---------Product---------


//retrieve all products
router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});


//inserting a product
router.route('/add').post(upload.single('image'), (req, res) => {
    const productName = req.body.productName;
    const price = req.body.price;
    const discount = req.body.discount;
    const categoryType = req.body.categoryType;
    const description = req.body.description;
    const image = req.body.image;


    //creating new product
    const newProduct = new Product({
        productName,
        price,
        discount,
        categoryType,
        description,
        image,
  
    });

    if(req.file){
        newProduct.image = req.file.path
    }

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));



});

//retrieve products by id
router.route('/:id').get((req, res) =>{
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});



//delete a product
router.route('/:id').delete((req, res) =>{
Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
    

//update a product
router.route('/update/:id').post((req, res) =>{
Product.findById(req.params.id)
    .then(product => {
        product.productName = req.body.productName;
        product.price = Number(req.body.price);
        product.discount = Number(req.body.discount);
        product.categoryType = req.body.categoryType;
        product.description = req.body.description;
    
        product.save()
            .then(() => res.json('Product updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    
    })

    .catch(err => res.status(400).json('Error: ' + err));
});
    



module.exports = router;