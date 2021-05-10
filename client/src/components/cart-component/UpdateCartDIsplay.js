import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

export default function UpdateCartDisplay(){
        
  const [size, setSize] = useState(" ");
  const [quantity, setQuantity] = useState(" ");

  let {id} = useParams();

      //retrieve data
      useEffect(() => {

        axios.get('http://localhost:5000/api/Cart/edit/'+id)
          .then(res => {
            setSize(res.data.size);
            setQuantity(res.data.quantity);
          })
          .catch(function (error){
            console.log(error);
          })
      }, []);
     

      const onChangeSize = (e) =>{
        console.log(e.target.value)
        setSize(e.target.value);
      }

      const onChangeQyantity= (e) =>{
        console.log(e.target.value)
        setQuantity(e.target.value);
      }

      const onSubmit = (e) => {

        const Cart = {
            size: size,
            quantity:quantity,
        };

        axios.post('http://localhost:5000/api/Cart/update/'+id, Cart)
        .then(response =>
            console.log(response.data));
            window.location.href("/cart");
    }    
      
    return(

      <div>

        <br/><br/><br/><br/>  

        <div className="shadow p-5" style= {{width:'40rem', marginLeft:"350px"}}>

          <h3 className="h3 mb-3 font-weight-bold">Update</h3>

        <br></br>

        <form className="needs-validation">

            <div className="form-group">
                {/* <lable>Size : </lable> <br></br>
                <input className="form-control" type='text' value={this.state.size} onChange ={this.onChangeSize}/> */}
                  <li class="list-group-item">
                    <label>Size</label><br></br>
                      <input type="radio" name = "size" value={"S"} checked={size==="S"} onChange={(e)=>onChangeSize(e)}/>&nbsp;<strong>S</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value={"M"} checked={size==="M"} onChange={(e)=>onChangeSize(e)}/>&nbsp; <strong>M</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value={"L"} checked={size==="L"} onChange={(e)=>onChangeSize(e)}/> &nbsp;<strong>L</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value={"XL"} checked={size==="XL"} onChange={(e)=>onChangeSize(e)}/> &nbsp;<strong>XL</strong> 
                      &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value={"XXL"} checked={size==="XXL"} onChange={(e)=>onChangeSize(e)}/> <strong>XXL</strong> 

                    </li>
            </div>

            <div className="list-group-item">

                <lable>Quantity : </lable> <br></br>
                <input className="list-group-item" type='text' value={quantity} onChange ={(e)=>onChangeQyantity(e)}/>
                
            </div>

            <br/>

            <center>
                <button className="btn btn-warning" onClick={(e)=>onSubmit(e)} > Update </button>
            </center>
            
            <br></br>

        </form>

        </div>

    </div>
       
      )
    }



      

        
