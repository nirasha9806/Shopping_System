const { Router } = require("express");

const express = require('express');
const router = express.Router();
const {Delivery} = require("../../models/Delivery");

//post method to save data
router.post("/insertDelivery", (req, res) => {

    //save data got from the client into the deliveries collection in the DB
    const delivery = new Delivery(req.body)

        delivery.save((err) => {
            if(err) return res.status(400).json({ success: false, err})
            return res.status(200).json({ success: true})
        })
});

module.exports = router;