import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateCartDisplay() {
  const [quantity, setQuantity] = useState('');

  let { id } = useParams();

  //retrieve data
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Cart/edit/' + id, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setQuantity(res.data.quantity);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const onChangeQyantity = (e) => {
    console.log(e.target.value);
    setQuantity(e.target.value);
  };

  const onSubmit = (e) => {
    const Cart = {
      quantity: quantity,
    };

    axios
      .post('http://localhost:5000/api/Cart/update/' + id, Cart)
      .then((response) => console.log(response.data));
    window.location.href('/cart');
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div
        className='shadow p-5'
        style={{ width: '40rem', marginLeft: '350px' }}
      >
        <h3 className='h3 mb-3 font-weight-bold'>Update</h3>

        <br></br>

        <form className='needs-validation'>
          <div className='list-group-item'>
            <lable>Quantity : </lable> <br></br>
            <input
              className='list-group-item'
              type='text'
              value={quantity}
              onChange={(e) => onChangeQyantity(e)}
            />
          </div>

          <br />

          <center>
            <button className='btn btn-warning' onClick={(e) => onSubmit(e)}>
              {' '}
              Update{' '}
            </button>
          </center>

          <br></br>
        </form>
      </div>
    </div>
  );
}
