import React, { useState } from 'react'
import { axiosWithAuth } from './axiosWithAuth'
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
      .post('/auth/register', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        // props.history.push('/home')
        console.log(res.data)
      })
      .catch(err => console.log(err))}

  return (
    <>
    
      {/* <Logo src={LogoImg} /> */}
      Water My Plants
    
 
        <div>
        <h1>Welcome!</h1>
        <p>Register your account below</p>
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
          <button onClick={signUp}>Register</button>
          </form>
                  
          <Link to='/login'>Already have an account? - Sign In</Link>
       
        </div>

    </>
  );
};

export default SignUp;
