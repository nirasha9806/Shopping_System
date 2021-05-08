import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addpayment from './components/payment-component/Addpayment';


function App() {
  return (
    <Router>
         <Route exact path = '/Addpayment' component ={Addpayment}/>
      
    </Router>
  );
}

export default App;
