import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/signup-component/SignUp';
import LogIn from './components/login-component/Login';
import Addpayment from './components/payment-component/Addpayment';
import HomePage from './components/home-component/HomePage';
import Cart from './components/cart-component/CartDisplay';
import UpdateCartDisplay from './components/cart-component/UpdateCartDIsplay';
import DetailsCart from './components/cart-component/Pdetails';
import Products from './components/cart-component/ProductDisplay';
import AddDeliveryDetails from './components/delivery-component/Delivery';
import Insert from './components/product-component/AddProduct';
import Index from './components/product-component/retrieve';
import Edit from './components/product-component/edit';

function App() {
  return (
    <Router>
      <Route path='/home' component={HomePage} />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/payment' component={Addpayment} />
      <Route path='/delivery' component={AddDeliveryDetails} />
      <Route path='/cart' component={Cart} />
      <Route path='/updateCart/:id' component={UpdateCartDisplay} />
      <Route path='/product' component={Products} />
      <Route path='/detail/:id' component={DetailsCart} />
      <Route exact path='/addProduct' component={Insert} />
      <Route exact path='/displayProduct' component={Index} />
      <Route exact path='/editProduct/:id' component={Edit} />
    </Router>
  );
}

export default App;
