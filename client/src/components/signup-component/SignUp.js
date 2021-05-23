import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@material-ui/core';

export default function SignUp() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const onSubmit = () => {
    var user = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    axios.post('http://localhost:5000/user/signup', user).then((response) => {
      console.log(response.data);
      alert(response.data.message);
    });
  };

  return (
    <div>
      {' '}
      <br />
      <br />
      <br />
      <Grid>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            height: '80vh',
            width: 380,
            margin: '20px auto',
          }}
        >
          <Grid align='center'>
            <h2>Sign Up</h2>
          </Grid>
          <TextField
            name='name'
            label='Name'
            value={name}
            onChange={(e) => handleNameChange(e)}
            fullWidth
            required
          />{' '}
          <br />
          <br />
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
          />{' '}
          <br />
          <br />
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Role:</FormLabel>
            <RadioGroup
              name='buyer'
              value={role}
              onChange={(e) => handleRoleChange(e)}
            >
              <FormControlLabel
                value='Buyer'
                control={<Radio />}
                label='Buyer'
              />
              <FormControlLabel
                value='Seller'
                control={<Radio />}
                label='Seller'
              />
            </RadioGroup>
          </FormControl>
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
            Sign Up
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}
