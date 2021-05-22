import React, { useState } from 'react';
import '../../css/payment.css';
import axios from 'axios';
import Navbar from '../navbar-component/Header';

export default function Addpayment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [code, setCode] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    const Payment = {
      name: name,
      email: email,
      number: number,
      date: date,
      code: code,
      amount: amount,
    };

    axios
      .post('http://localhost:5000/api/payment/insertPayment', Payment)
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
      });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <Navbar /> <br />
      <br />
      <div className='App'>
        <br />
        <br />

        <div
          className='shadow p-5'
          style={{ width: '45rem', marginLeft: '345px' }}
        >
          <div className='card-body'>
            <div className='card-header'>
              <b>
                <center>Payment Information</center>
              </b>
            </div>
          </div>

          <div className='form-group'>
            <label required>Card Holder's Name *</label>
            <div>
              <input
                type='text'
                className='form-control'
                value={name}
                onChange={(e) => onChangeName(e)}
                placeholder='enter name'
              />
            </div>
          </div>

          <div className='form-group'>
            <label required>Card Holder's Email address *</label>
            <div>
              <input
                type='text'
                className='form-control'
                name='email'
                placeholder='enter email'
                value={email}
                onChange={(e) => onChangeEmail(e)}
              />
            </div>
          </div>
          <div className='form-group'>
            <label required>Card Number *</label>
            <div>
              <input
                type='text'
                className='form-control'
                value={number}
                onChange={(e) => onChangeNumber(e)}
                placeholder='0000 0000 0000 0000'
              />
            </div>
          </div>

          <div className='form-group'>
            <label required>Expiry Date *</label>
            <div>
              <input
                type='text'
                className='form-control'
                value={date}
                onChange={(e) => onChangeDate(e)}
                placeholder='MM/YY'
              />
            </div>
          </div>

          <div className='form-group'>
            <label required> CVC *</label>
            <div>
              <input
                type='text'
                className='form-control'
                value={code}
                onChange={(e) => onChangeCode(e)}
                placeholder='000'
              />
            </div>
          </div>

          <div className='form-group'>
            <label required> Amount </label>
            <div>
              <input
                type='text'
                className='form-control'
                value={amount}
                onChange={(e) => onChangeAmount(e)}
                placeholder='Amount 0.00'
              />
            </div>
          </div>

          <center>
            <button className='btn btn-dark' onClick={() => handleSubmit()}>
              {' '}
              Pay Now{' '}
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}
