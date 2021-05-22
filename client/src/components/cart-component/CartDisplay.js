import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../navbar-component/Header';

function Cart() {
  const [carts, setCarts] = useState([]);

  //retrieve data
  useEffect(() => {
    axios.get('http://localhost:5000/api/Cart').then((res) => {
      const cart = res.data;
      setCarts(cart);
    });
  }, []);

  //Delete Method
  const Delete = (id) => {
    axios
      .post('http://localhost:5000/api/Cart/delete/' + id)
      .then((response) => {
        alert('Successfully Deleted !');
      });
  };

  //calculate product total
  const calculateTot = () => {
    let total = 0;
    carts.map((Cart) => (total = total + Cart.quantity * Cart.price));
    console.log(total);
    return total;
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />

      <h3 className='header3'>
        <center>
          <b>CHECKOUT !</b>
        </center>
      </h3>
      <br />

      <div
        className='shadow p-5'
        style={{ width: '75rem', marginLeft: '100px' }}
      >
        <table id='my-table' class='table table-hover'>
          <thead className='table-active'>
            <tr>
              <th>Product Name</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Edit items</th>
              <th>Remove item</th>
            </tr>
          </thead>

          {carts.map((Cart) => (
            <tr>
              <td>{Cart.itemname}</td>
              <td>{Cart.size}</td>
              <td>{Cart.quantity}</td>
              <td>{Cart.price}</td>
              <td>
                <button className='btn btn-warning'>
                  <i className='fas fa-edit'></i>
                  <Link to={'/updateCart/' + Cart._id}>EDIT</Link>
                </button>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => Delete(Cart._id)}
                >
                  <i className='fas fa-trash'></i> REMOVE
                </button>
              </td>
            </tr>
          ))}

          <h5>
            <tr>
              <td>
                <b>TOTAL (Rs.) :</b>
              </td>
              <td>
                <b>{calculateTot()}</b>
              </td>
            </tr>
          </h5>
        </table>

        <button
          type='button'
          value='Add Delivery Details'
          className='btn btn-dark'
          onClick={(event) => (window.location.href = '/delivery')}
          style={{ marginLeft: '873px' }}
        >
          Add Delivery Details
        </button>
      </div>
    </div>
  );
}

export default Cart;
