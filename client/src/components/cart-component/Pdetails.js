import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar-component/Header';

function DetailsCart() {
  const [quantity, setQuantity] = useState(' ');
  const [product, setProduct] = useState([]);
  const [uId, setUId] = useState('');

  let { id } = useParams();

  const handleQtyChange = (e) => {
    setQuantity(e.target.value);
  };

  //Retrieve
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Cart/display/' + id, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        const products = res.data;
        setProduct(products);
      });
  });

  //insert
  const onSubmit = (pName, price, discount, category, qty) => {
    let uid = window.sessionStorage.getItem('me');
    setUId(uid);

    const Cart = {
      itemname: pName,
      price: price,
      discount: discount,
      category: category,
      quantity: qty,
      uId: uId,
    };

    axios
      .post('http://localhost:5000/api/Cart/insertCart', Cart, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          alert('Successfully Added');
        } else {
          alert('Please Try Again !!');
        }
      });
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />

      <card>
        <div className='container py-5'>
          {/* <div className= "card" style ={{width:'100%', paddingLeft:'20px', paddingTop:'20px', fontSize:'16px', paddingBottom:'20px', marginTop:'10px'}}> */}

          {product.map((product) => (
            <ul>
              <li className='list-group-item'>
                <div>
                  <img
                    src={`http://localhost:5000/${product.image}`}
                    alt=''
                    style={{ width: '35%', marginLeft: '350px' }}
                  />
                </div>
              </li>

              <li className='list-group-item'>
                <p>
                  Product Name: <strong>{product.itemname}</strong>
                </p>
              </li>
              <li className='list-group-item'>
                <p>
                  Price: <strong>{product.price}.00</strong>
                </p>
              </li>
              <li className='list-group-item'>
                <p>
                  Discount: <strong>{product.discount}%</strong>
                </p>
              </li>
              <li className='list-group-item'>
                <p>
                  Category: <strong>{product.category}</strong>
                </p>
              </li>

              <li class='list-group-item'>
                <label>
                  Quantity:{' '}
                  <input
                    type='text'
                    value={quantity}
                    onChange={(e) => handleQtyChange(e)}
                  ></input>
                </label>

                <br></br>
              </li>

              <li class='list-group-item'>
                <button
                  className='btn btn-dark'
                  onClick={() =>
                    onSubmit(
                      product.itemname,
                      product.price,
                      product.discount,
                      product.categoryType,
                      quantity
                    )
                  }
                >
                  Add to Cart
                </button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button
                  className='btn btn-dark'
                  onClick={(event) => (window.location.href = '/cart')}
                >
                  View Cart
                </button>
              </li>
            </ul>
          ))}
        </div>
      </card>
    </div>
  );
}

export default DetailsCart;
