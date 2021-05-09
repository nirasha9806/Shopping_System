import React, {Component} from 'react';
import axios from 'axios';

import TableRow from '../tableRow-component/TableRow';
import { Link } from 'react-router-dom';


export default class Index extends Component{
  
    constructor(props){
        super(props);
            this.state={product : []};
        }
       componentDidMount(){
            axios.get('http://localhost:5000/api/sellers')
             .then(response=>{
                 this.setState({product : response.data});

             })
             .catch(function(error){
                 console.log(error);
             })
        }
        tabRow(){
            return this.state.product.map(function(object,i){
                return <TableRow obj={object} key = {i}/>;
            });
        }
   
   
        

   
    render(){
        return (
        <div>
            <h3 align="center"> Details of the Products</h3>
            <table className="table table-striped" style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Category</th>
                        <th>Discription</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            <div>
                
            </div>
        </div>
        
        );
    }
}