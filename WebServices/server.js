const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());


//DB config
const db = require('./keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db ,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;

    //'/api/product' location
//app.use('/api/products', require('./api/routes/products'));

app.use('/api/Cart', require('./api/routes/Cart'));


    app.listen(port, () => console.log('Server started on port ' +port));