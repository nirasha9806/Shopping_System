import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Insert from './components/seller-component/AddProduct';
import Index from './components/retrieveproduct-component/retrieve';
import Edit from './components/editproduct-component/edit';


function App() {
  return (
    <Router>

        <Route exact path="/insert" component={Insert} />
        <Route exact path="/retrieve" component={Index} />
        <Route exact path='/edit/:id' component = {Edit}/>
       
        

      
    </Router>
  );
}

export default App;
