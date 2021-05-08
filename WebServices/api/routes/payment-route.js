const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Payment} = require("../../models/payment-model");

//post method to save data
router.post("/insertPayment", (req, res) => {

    // if((req.body.number).length != 16){
    //     return res.status(400).json({ message: "Card Number is Invalid"})
    // }
    // else{
    //save data got from the client into the payment collection in the DB
    const payment = new Payment(req.body)

        payment.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
    // }
});

module.exports = router;