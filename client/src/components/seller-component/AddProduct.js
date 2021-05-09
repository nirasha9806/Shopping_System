import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Insert(){


    const [itemname, setItemName] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [discount, setDiscount] = useState(" ");
    const [category, setCategory] = useState(" ");
    const [description, setDescription] = useState(" ");

    const onChangeitemname = (e) => {
        setItemName(e.target.value);
        console.log(e.target.value);
    }

    const onChangeprice = (e) => {
        setPrice(e.target.value);
    }

    const onChangediscount = (e) => {
        setDiscount(e.target.value);
    }

    const onChangecategory = (e) => {
        setCategory(e.target.value);
    }


    const onChangedescription = (e) => {
        setDescription(e.target.value);
    }

    const onSubmit = () => {
        
        const obj = {
            itemname : itemname,
            price : price,
            discount : discount,
            category : category,
            description : description
        };

        axios.post('http://localhost:5000/api/sellers/add', obj).then(res => 
            {
                alert(res.data);
            }).catch(err =>{
                console.log(err);
            })
        
    }

        return(


            <center> 

            
           <div class="form-group w-25">



                <h3><center>Add Products</center></h3>

<br></br>
                
             <form >
               
                        <label><span>Item Name:</span></label>
                        
                        <input name="item" type ="text" className="form-control" placeholder="123-45-678" value={itemname} onChange={(e)=>onChangeitemname(e)} />
                   
                       
                   
                        <label><span>Price:</span></label>
                        
                        <input name="price" type = "text" className="form-control" value={price} onChange={(e)=>onChangeprice(e)} />
                   
                    <div className = "form-group">
                        <label>Discount:</label>
                        <input name="discount" type = "text" className="form-control" value={discount} onChange={(e)=>onChangediscount(e)} />
                    </div>

                    <div className = "form-group">
                        <label>category:</label>
                        <input name="category" type = "text" className="form-control" value={category} onChange={(e)=>onChangecategory(e)} />
                    </div>

                    <div className = "form-group">
                        <label>Description:</label>
                        <input  name="description" type = "text" className="form-control" value={description} onChange={(e)=>onChangedescription(e)} />
                    </div>
                    <div className = "form-group">
                        
                    <span> </span>      <button className="btn btn-primary" onClick={()=>onSubmit()}>Add Product </button>&nbsp;&nbsp;
                        <Link to={"/retrieve"} className="btn btn-primary">View Details</Link>
                    </div>
                </form>

                  
            </div>
            
           </center>
        )
    }
