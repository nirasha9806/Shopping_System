import {BrowserRouter as Router, Route} from 'react-router-dom'


import Cart from './components/Cart/CartDisplay';
import UpdateCartDisplay from './components/Cart/UpdateCartDIsplay';
import DetailsCart from './components/Cart/Pdetails';
import Products from './components/Cart/ProductDisplay';


function App() {
  return (
    <Router>
    
      <Route path="/cart" component={Cart}/> 
      <Route path="/updateCart/:id/:uid" component={UpdateCartDisplay}/> 
      <Route path="/product" component={Products}/>
      <Route path="/detail/:id/:uid" component={DetailsCart}/>

      
    </Router>
  );
}

export default App;
