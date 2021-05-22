const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRoutes = require('./api/routes/user');
const paymentRoute=require('./api/routes/payment-route');
const cartRoutes = require('./api/routes/Cart');
const deliveryRoutes = require('./api/routes/delivery');
const productRoutes = require('./api/routes/products');

app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());

//routes which could handle requests
app.use("/user", userRoutes);
app.use('/api/payment',paymentRoute);
app.use('/api/Cart', cartRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/sellers', productRoutes);
app.use('/uploads', express.static('uploads'));

//DB config
const db = require('./keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db ,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
    const port  = process.env.PORT || 5000;


    app.listen(port, () => console.log('Server started on port ' +port));