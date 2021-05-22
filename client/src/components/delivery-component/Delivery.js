import React, { useState } from 'react';
import '../../css/delivery.css';
import axios from 'axios';
import Navbar from '../navbar-component/Header';

export default function AddDeliveryDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    const Delivery = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      zipcode: zipcode,
      address: address,
    };

    axios
      .post('http://localhost:5000/api/delivery/insertDelivery', Delivery)
      .then((response) => {
        if (response.data.success) {
          window.location = '/payment';
        } else {
          alert('Failed');
        }
      });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeNumber = (e) => {
    setPhone(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className='App'>
      <Navbar />
      <br />
      <br />

      <div
        className='shadow p-5'
        style={{ width: '45rem', marginLeft: '345px' }}
      >
        <div className='card-body'>
          <div className='card-header'>
            <b>
              <center>Delivery Information</center>
            </b>
          </div>
        </div>

        <div className='form-group'>
          <label required>Reciever's Name *</label>
          <div>
            <input
              type='text'
              className='form-control'
              value={name}
              onChange={(e) => onChangeName(e)}
            />
          </div>
        </div>

        <div className='form-group'>
          <label required>Reciever's Email address *</label>
          <div>
            <input
              type='text'
              className='form-control'
              name='email'
              value={email}
              onChange={(e) => onChangeEmail(e)}
            />
          </div>
        </div>
        <div className='form-group'>
          <label required>Phone Number *</label>
          <div>
            <input
              type='text'
              className='form-control'
              value={phone}
              onChange={(e) => onChangeNumber(e)}
            />
          </div>
        </div>

        <div className='form-group'>
          <label required>City *</label>
          <div>
            <input
              type='text'
              className='form-control'
              value={city}
              onChange={(e) => onChangeCity(e)}
            />
          </div>
        </div>

        <div className='form-group'>
          <label required> Zipcode *</label>
          <div>
            <input
              type='text'
              className='form-control'
              value={zipcode}
              onChange={(e) => onChangeZipCode(e)}
            />
          </div>
        </div>

        <div className='form-group'>
          <label required> Address </label>
          <div>
            <input
              type='text'
              className='form-control'
              value={address}
              onChange={(e) => onChangeAddress(e)}
            />
          </div>
        </div>

        <center>
          <button className='btn btn-dark' onClick={() => handleSubmit()}>
            {' '}
            Add Delivery Details{' '}
          </button>
        </center>
      </div>
    </div>
  );
}
