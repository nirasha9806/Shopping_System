import {BrowserRouter as Router, Route} from 'react-router-dom'


<<<<<<< Updated upstream
import Cart from './components/Cart/CartDisplay';
import UpdateCartDisplay from './components/Cart/UpdateCartDIsplay';
import DetailsCart from './components/Cart/Pdetails';
import Products from './components/Cart/ProductDisplay';

=======
import Cart from './components/cart-component/CartDisplay';
import UpdateCartDisplay from './components/cart-component/UpdateCartDIsplay';
import DetailsCart from './components/cart-component/Pdetails';
import Products from './components/cart-component/ProductDisplay';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
    
      <Route path="/cart" component={Cart}/> 
<<<<<<< Updated upstream
      <Route path="/updateCart/:id/:uid" component={UpdateCartDisplay}/> 
      <Route path="/product" component={Products}/>
      <Route path="/detail/:id/:uid" component={DetailsCart}/>
=======
      <Route path="/updateCart/:id" component={UpdateCartDisplay}/> 
      <Route path="/product" component={Products}/>
      <Route path="/detail/:id" component={DetailsCart}/>
>>>>>>> Stashed changes

      
    </Router>
  );
}

export default App;
