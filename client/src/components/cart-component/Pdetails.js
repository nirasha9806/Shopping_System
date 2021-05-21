import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

function DetailsCart(){

  const [itemname, setItemname] = useState(" ");
  const [size, setSize] = useState(" ");
  const [quantity, setQuantity] = useState(" ");
  const [product, setProduct] = useState([]);

  let {id} = useParams();  


         const handleQtyChange = (e) => {
            setQuantity(e.target.value);
        }
    
    
     //Retrieve
     useEffect (() => {
      axios.get('http://localhost:5000/api/Cart/display/'+id)
      .then(res => {
          const products = res.data;
          setProduct(products);
        })
    },[]);

    //target is textbox and value is textbox value
    const onChangeRadio1 = (e)=> {
      console.log(e.target.value)
      setSize(e.target.value);
    }

    //insert
    const onSubmit = (pName,price,discount,category,size,qty) => {

      const Cart = {
        itemname:pName,
        price:price,
        discount:discount,
        category:category,
        size:size,
        quantity:qty,
      };

      axios.post('http://localhost:5000/api/Cart/insertCart', Cart)
          .then(response => {
              if(response.data.success){
                  alert('Successfully Added')
              } else {
                  alert('Please Try Again !!')
              }
          })
      
  }
    
    
          
        return(

              <div>
           
      
          <br></br>
      
          <div class="float-md-right">
      
              <Link to={"/cart"}> &nbsp; <i class="fas fa-cart-plus fa-2x"  style={{color:"black"}}>
              </i></Link>

          </div>

          <card>

              <div className="container py-5">
            {/* <div className= "card" style ={{width:'100%', paddingLeft:'20px', paddingTop:'20px', fontSize:'16px', paddingBottom:'20px', marginTop:'10px'}}> */}
              
                    { product.map(product => 

                    <ul>
                    <li className="list-group-item">
                      <div ><img src={`http://localhost:5000/${product.image}`} style ={{width:'35%', marginLeft: '350px'}} /></div>
                    </li>

                    <li className="list-group-item"><p>Product Name: <strong>{product.itemname}</strong></p></li>
                    <li className="list-group-item"><p>Price: <strong>{product.price}.00</strong></p></li>
                    <li className="list-group-item"><p>Discount: <strong>{product.discount}%</strong></p></li>
                    <li className="list-group-item"><p>Category: <strong>{product.category}</strong></p></li>
                    
                    <li class="list-group-item">

                    <label>Size: </label>

                    <br></br>

                    <input type="radio" name = "size" value="S" checked={size==="S"} onChange={(e) => onChangeRadio1(e)}/>&nbsp;<strong>S</strong> 
                    &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="M" checked={size==="M"} onChange={(e) => onChangeRadio1(e)}/>&nbsp; <strong>M</strong> 
                    &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="L" checked={size==="L"} onChange={(e) => onChangeRadio1(e)}/> &nbsp;<strong>L</strong> 
                    &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="XL" checked={size==="XL"} onChange={(e) => onChangeRadio1(e)}/> &nbsp;<strong>XL</strong> 
                    &nbsp; &nbsp; &nbsp;&nbsp;<input type="radio" name = "size" value="XXL" checked={size==="XXL"} onChange={(e) => onChangeRadio1(e)}/> <strong>XXL</strong> 

                    </li>

                    <li class="list-group-item">

                    <label>Quantity: <input type="text" value={quantity} onChange={(e)=>handleQtyChange(e)}></input></label>

                    <br></br>
                    
                    </li>

                    <li class="list-group-item">

                    <button className="btn btn-dark"  
                    onClick={() =>onSubmit(product.itemname,product.price,product.discount,product.categoryType,size,quantity)}>
                    Add to Cart
                    </button>
                  
                    &nbsp; &nbsp;  &nbsp; &nbsp;
                    <button className="btn btn-dark" 
                    onClick={event =>  window.location.href='/cart'}> 
                    View Cart
                    </button>
                    
                    </li>  
                                   
                    </ul>        
                  )}
                
             </div>
             </card>

              </div>
             
            )
          }

export default DetailsCart