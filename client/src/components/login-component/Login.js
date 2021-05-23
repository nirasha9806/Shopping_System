import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Paper, TextField, Button } from '@material-ui/core';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    var user = {
      email: email,
      password: password,
    };
    axios.post('http://localhost:5000/user/login', user).then((response) => {
      console.log(response.data);
      response.data.user.forEach((item) => {
        if (item.role === 'Buyer') {
          window.sessionStorage.setItem('token', response.data.token);
          window.sessionStorage.setItem('me', item._id);
          window.location = '/product';
        } else {
          window.sessionStorage.setItem('token', response.data.token);
          window.sessionStorage.setItem('me', item._id);
          window.location = '/displayProduct';
        }
      });
    });
  };

  return (
    <div>
      {' '}
      <br />
      <br />
      <br />
      <br />
      <Grid>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            height: '55vh',
            width: 380,
            margin: '20px auto',
          }}
        >
          <Grid align='center'>
            <h2>Log In</h2>
          </Grid>
          <TextField
            name='email'
            label='Email'
            value={email}
            onChange={(e) => handleEmailChange(e)}
            fullWidth
            required
          />{' '}
          <br />
          <br />
          <TextField
            name='password'
            label='Password'
            value={password}
            type='password'
            onChange={(e) => handlePasswordChange(e)}
            fullWidth
            required
          />
          <br />
          <br />
          <br />
          <Button
            type='submit'
            color='primary'
            variant='contained'
            onClick={() => onSubmit()}
            fullWidth
          >
            Log In
          </Button>{' '}
          <br />
          <br />
          <a href='/signup'>Not Yet Registerd? Click here..</a>
        </Paper>
      </Grid>
    </div>
  );
}
