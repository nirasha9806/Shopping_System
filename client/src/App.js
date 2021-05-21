import {BrowserRouter as Router, Route} from 'react-router-dom'

import Cart from './components/cart-component/CartDisplay';
import UpdateCartDisplay from './components/cart-component/UpdateCartDIsplay';
import DetailsCart from './components/cart-component/Pdetails';
import Products from './components/cart-component/ProductDisplay';

import HomePage from "./components/home-component/HomePage";


function App() {
  return (
    <Router>
    
      <Route exact path="/" component={HomePage}/>

      <Route path="/cart" component={Cart}/> 
      <Route path="/updateCart/:id" component={UpdateCartDisplay}/> 
      <Route path="/product" component={Products}/>
      <Route path="/detail/:id" component={DetailsCart}/>


      
    </Router>
  );
}

export default App;
