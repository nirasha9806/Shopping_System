const express=require('express');
const productRoutes=express.Router();


let {Product}= require('../../models/product');

//let {Fetch} = require('../models/fetchdata-model');
productRoutes.route('/add').post(function(req,res){

    let product = new Product(req.body);
    product.save()
            .then(product => {
                res.status(200).json({message: "Product added Succefully"});
                console.log(product);
            })
            .catch(err=>{
                res.status(400).send({message: "Please try again"});
            });

});
//get
productRoutes.route('/').get(function(req,res){
    Product.find(function(err,product){
        if(err)
         console.log(err);
        else{
            res.json(product);
        } 
    });
});

//delete
productRoutes.route('/delete/:id').post(function(req,res){
    Product.deleteOne({_id: req.params.id},function(err,product){
        if(err)res.json(err);
        else res.json("successfully removed");
    });
});
//edit 

productRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Product.findById(id,function(err,product){
        res.json(product);
    });
});

//update

productRoutes.route('/update/:id').post(function(req,res){
    Product.findById(req.params.id,function(err,product){
        if(!product)
            res.status(404).send("data is not found");
        else{
            product.itemname=req.body.itemname;
            product.price=req.body.price;
            product.discount=req.body.discount;
            product.category=req.body.category;
            product.description=req.body.description;
            product.save().then(product=>{
                res.json('Update complete');
                
            })
            .catch(err=>{
                res.status(400).send("unable to update database ");
            });
        }    
    });
});


module.exports = productRoutes;