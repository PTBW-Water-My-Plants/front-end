import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styled from 'styled-components'

//import InactiveButton from '../Assets/SignUpInactiveButton'
// import WelcomeLogIn from '../Components/WelcomeLogIn.js';

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  
  const handleChange = e => {
    setCredentials({
      ...credentials, 
      [e.target.name]: e.target.value
      })}

  const signUp = e => {
    e.preventDefault()
    console.log(credentials)
    axiosWithAuth()
      .post('https://watertheplants.herokuapp.com/api/auth/register', credentials)
      .then(data =>console.log(data))
      .catch(error => {
        console.log(error)
      })}
      // .then(res => {
      //   localStorage.setItem('token', res.data.token)
      //   // props.history.push('/home')
      //   console.log(res.data)
      // })
      // .catch(err => console.log(err))}

  return (
    <>
    
      {/* <Logo src={LogoImg} /> */}
      Water My Plants
    
 
        <div>
        <h1>Welcome!</h1>
        <p>Sign up for an account below</p>
          <form onSubmit={signUp}>
          <input
            type='text'
            name='username'
            placeholder='NAME'
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='PASSWORD'
            value={credentials.password}
            onChange={handleChange}
          />
          <button onClick={signUp}>Sign Up!</button>
          </form>
                  
          <Link to='/login'>Already have an account? - Login</Link>
       
        </div>

    </>
  );
};

export default SignUp;
