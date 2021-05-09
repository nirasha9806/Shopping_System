import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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

            <div style={{marginTop:10}}>

                <h3><center>Add Products</center></h3>
                <form>
                    <div className = "form-group">
                        <label>Item Name:</label>
                        <input name="item" type ="text" className="form-control" value={itemname} onChange={(e)=>onChangeitemname(e)} />
                    </div>

                    <div className = "form-group">
                        <label>Price:</label>
                        <input name="price" type = "text" className="form-control" value={price} onChange={(e)=>onChangeprice(e)} />
                    </div>
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
                        
                        <button className="btn btn-primary" onClick={()=>onSubmit()}>Add Product </button>&nbsp;&nbsp;
                        <Link to={"/retrieve"} className="btn btn-primary">Edit & Update</Link>
                    </div>
                </form>


            </div>
            
            
        )
    }
