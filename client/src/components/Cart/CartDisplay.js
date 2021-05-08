import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


class Cart extends Component{

  constructor(props) {
    super(props)
           this.state = {
            carts: [],
            itemname:'',
            size:'',
            quantity:'',
            price:'',
          }
        }


      //retrieve data
      componentDidMount() {
        axios.get('http://localhost:5000/api/Cart/'+this.props.match.params.uid)
        .then(res => {
            const carts = res.data;
            this.setState({ carts });
          })
      }

      //Delete Method
      delete(id){
        axios.post('http://localhost:5000/api/Cart/delete/'+id)
        .then(response =>{
          alert("Successfully Deleted !")
          this.componentDidMount();
        });
      }

calculateTot(){
  let total=0;
  this.state.carts.map(Cart =>
    total = total + (Cart.quantity * Cart.price)
  );
  return total
}

          render(){
            return(
              <div>
                <br/>
                <h3 className = 'header2'>
                    <center>
                        <b>CHECKOUT !</b>
                    </center>
                </h3><br/>
                <div className="shadow p-5" style= {{width:'75rem', marginLeft:"100px"}}>
             
              <table id="my-table" class="table table-hover">
                <thead className="table-active">
                  <tr>
                  <th >Product Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Edit items</th>
                  <th>Remove item</th>
                </tr>
                </thead>

                { this.state.carts.map(Cart =>
                
                <tr>
                  <td >{Cart.itemname}</td>
                  <td>{Cart.size}</td>
                  <td>{Cart.quantity}</td>
                  <td>{Cart.price}</td>
                  <td><button className="btn btn-warning"><i className="fas fa-edit"></i><Link  to={"/updateCart/"+Cart._id+'/'+this.props.match.params.uid}>EDIT</Link></button></td>
                  <td><button className="btn btn-danger" onClick={() => this.delete(Cart._id)}><i className="fas fa-trash"></i> REMOVE</button></td>
                </tr>
                )}

                <h5><tr>
                <td><b>TOTAL (Rs.) :</b></td>
                <td><b>{this.calculateTot()}</b></td>
                </tr></h5>
              </table>
              
              
              {/* <button class="btn btn-dark" style ={{marginLeft:"873px"}}>
                <Link to={"/deliveryInsert/"+this.props.match.params.uid+'/'+this.calculateTot()}>Add Delivary Details</Link></button>
               */}

                <button type="button" value="Add Delivery Details" className="btn btn-dark" 
                 onClick={event =>  window.location.href='/deliveryInsert/:id'}
                 style ={{marginLeft:"873px"}}>
                 Add Deliver Details              
                </button>
              
              
              
              </div>

                </div>  
            )
          }
          }
          export default Cart;
