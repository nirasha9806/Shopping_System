import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar-component/Navbar';

export default function Insert() {
  const [itemname, setItemName] = useState(' ');
  const [price, setPrice] = useState(' ');
  const [discount, setDiscount] = useState(' ');
  const [category, setCategory] = useState(' ');
  const [description, setDescription] = useState(' ');
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeitemname = (e) => {
    setItemName(e.target.value);
    console.log(e.target.value);
  };

  const onChangeprice = (e) => {
    setPrice(e.target.value);
  };

  const onChangediscount = (e) => {
    setDiscount(e.target.value);
  };

  const onChangecategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangedescription = (e) => {
    setDescription(e.target.value);
  };

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = () => {
    let formdata = new FormData();
    formdata.append('itemname', itemname);
    formdata.append('price', price);
    formdata.append('discount', discount);
    formdata.append('category', category);
    formdata.append('description', description);
    formdata.append('image', selectedFile, selectedFile.name);

    axios
      .post('http://localhost:5000/api/sellers/add', formdata)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <center>
        <div
          class='form-group w-25'
          className='shadow p-5'
          style={{ width: '45rem' }}
        >
          <h3>
            <center>Add Products</center>
          </h3>

          <br></br>

          <div>
            <br />
            <br />
            <label>Choose Image: </label>{' '}
            <input type='file' onChange={(e) => fileSelectedHandler(e)} />
            <br />
            <br />
          </div>

          <label class='float-left'>
            <span>Item Name:</span>
          </label>

          <input
            name='item'
            type='text'
            className='form-control'
            placeholder='123-45-678'
            value={itemname}
            onChange={(e) => onChangeitemname(e)}
          />

          <label class='float-left'>
            <span>Price:</span>
          </label>

          <input
            name='price'
            type='text'
            className='form-control'
            value={price}
            onChange={(e) => onChangeprice(e)}
          />

          <div className='form-group'>
            <label class='float-left'>Discount:</label>
            <input
              name='discount'
              type='text'
              className='form-control'
              value={discount}
              onChange={(e) => onChangediscount(e)}
            />
          </div>

          <div className='form-group'>
            <label class='float-left'>category:</label>
            <input
              name='category'
              type='text'
              className='form-control'
              value={category}
              onChange={(e) => onChangecategory(e)}
            />
          </div>

          <div className='form-group'>
            <label class='float-left'>Description:</label>
            <input
              name='description'
              type='text'
              className='form-control'
              value={description}
              onChange={(e) => onChangedescription(e)}
            />
          </div>
          <div className='form-group'>
            <span> </span>{' '}
            <button className='btn btn-dark' onClick={() => onSubmit()}>
              Add Product{' '}
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}
