const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require("path");
const paymentRoute=require('./api/routes/payment-route');

app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());

// sanduni payment
app.use('/api/payment',paymentRoute);


//DB config
const db = require('./keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db ,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));