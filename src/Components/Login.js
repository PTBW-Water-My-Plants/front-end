import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../ContextAPI/Context';
import './App.css'
import { axiosWithAuth } from '../Auth/axiosWithAuth';
import './index.css';
import Styled from 'styled-components';
import StyledButton from './StyledButton';

const DivT = Styled.div`
  width:20%;
  height: 100%;
  background-color:tan;
  color:blue;

`;
export default function Login (props) {
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const [form, setForm] = useState({
    username: userInfo?.username,
    password: userInfo?.password
  });

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('https://watertheplants.herokuapp.com/api/auth/register', form)
      .then(res => {
        console.log(res.data);
        setUserInfo(res.data);
//setTimeout(() => props.history.push('/Home'), 1000);
      })
      .catch(err => {
        if (err.response) {
          console.error('Error logging in: ', err.response.data);
        } else {
          console.error('Error logging in: ', err);
        }
      });
  };

  return (

        <div className="App">
            <label htmlFor="loggingin">
                Login
              
              <h1>Welcome back!</h1>
            </label>
          <form className="App" onSubmit={onSubmit}>
            <label htmlFor="username">
              USER NAME
            
            </label>
            <input
              
              type="username"
              name="username"
              placeholder="USERNAME"
              value={form.username}
              onChange={handleChanges}
            />
            <label htmlFor="password" >
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={form.password}
              onChange={handleChanges}
            />
            
             <button >Login</button>
            
          </form>
          <StyledButton>
            DON'T HAVE AN ACCOUNT?<NavLink to="/">SIGN UP</NavLink>
          </StyledButton>
        </div>
      
    
  );
}
