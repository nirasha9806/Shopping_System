import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

//import Cart from '../../backend/models/Cart';

export default class UpdateCartDisplay extends Component{

  constructor(props) {
    super(props)
    
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeQyantity = this.onChangeQyantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

           this.state = {
            size:'',
            quantity:''
          }
          }
        


      //retrieve data
      componentDidMount() {

        axios.get('http://localhost:5000/api/Cart/edit/'+this.props.match.params.id)
          .then(res => {
            this.setState({
              size: res.data.size,
              quantity:res.data.quantity
            });
          })
          .catch(function (error){
            console.log(error);
          })
      }
     

      onChangeSize = e =>{
        console.log(e.target.value)
        this.setState({

          size: e.target.value
        })
      }

      onChangeQyantity= e =>{
        console.log(e.target.value)
        this.setState({

          quantity: e.target.value
        })
      }

      onSubmit = (event) => {
        event.preventDefault();

        const Cart = {
            size: this.state.size,
            quantity:this.state.quantity
        };

        axios.post('http://localhost:5000/api/Cart/update/'+this.props.match.params.id, Cart)
        .then(response =>
            console.log(response.data));
            window.location = "/cart/"+this.props.match.params.uid;
    }    
      
    render(){
      return(

<div><br/>  <br/><br/><br/>  
        <div className="shadow p-5" style= {{width:'40rem', marginLeft:"350px"}}>
        <h3 className="h3 mb-3 font-weight-bold">Update</h3>

        <br></br>
        <form className="needs-validation" onSubmit={this.onSubmit}>

            <div className="form-group">
                {/* <lable>Size : </lable> <br></br>
                <input className="form-control" type='text' value={this.state.size} onChange ={this.onChangeSize}/> */}
                  <li class="list-group-item">
                    <label>Size</label><br></br>
                      <input type="radio" name = "size" value="S" required checked={this.state.size==="S"} onChange={this.onChangeSize}/>&nbsp;<strong>S</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="M" required checked={this.state.size==="M"} onChange={this.onChangeSize}/>&nbsp; <strong>M</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="L" required checked={this.state.size==="L"} onChange={this.onChangeSize}/> &nbsp;<strong>L</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="XL" required checked={this.state.size==="XL"} onChange={this.onChangeSize}/> &nbsp;<strong>XL</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="XXL" required checked={this.state.size==="XXL"} onChange={this.onChangeSize}/> <strong>XXL</strong> 

                    </li>
            </div>

            <div className="list-group-item">
                <lable>Quantity : </lable> <br></br>
                <input className="list-group-item" type='text' value={this.state.quantity} onChange ={this.onChangeQyantity}/>
            </div>
<br/>
            <center>
                <button className="btn btn-warning" onClick={this.onSubmit}> Update </button>
            </center>
            
            <br></br>

        </form>
    </div> 
  </div>
       
      )
    }


  }

      

        
