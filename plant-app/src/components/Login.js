import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../contextAPI/Context.js';

import { axiosWithAuth } from '../auth/axiosWithAuth.js';

export default function Login(props) {
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
    <div>
        Login
        <div>
          <h1>Welcome back!</h1>
          <form onSubmit={onSubmit}>
            <input
              
              type="username"
              name="username"
              placeholder="USERNAME"
              value={form.username}
              onChange={handleChanges}
            />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={form.password}
              onChange={handleChanges}
            />
             {/* <button onClick={PlantsList}>Login</button> */}
            
          </form>
          <button>
            DON'T HAVE AN ACCOUNT?<NavLink to="/">SIGN UP</NavLink>
          </button>
        </div>
      
    </div>
  );
}