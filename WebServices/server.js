const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();


//BodyParser Middlewa
app.use(bodyParser.json());
app.use(cors());


app.use('/api/sellers', require('./api/routes/product'));

//DB config
const db = require('./keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db ,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));