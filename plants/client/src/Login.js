

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
// TODO: Make a forgot password link

const Login =(props) => {

  const [usrs,setUsrs] = useState({id:0,name:"",email:"",password:""})
  const [res,setRes] = useState([]);
  const handleChange = (e) =>{
      e.persist();
      const ch= {...usrs,[e.target.name]: e.target.value};
  
          setUsrs(ch);
  //    if(submited){
  //        setUsrs(ch);
  //    }
          console.log(usrs);
  };

  const submited = () =>{
    console.log('submitted in Login');
  };

    return (
      <div className="App">
          <form className="App" onSubmit={submited}>
            <label for="loggingin">
              Plant Login Form
                <h2 name="loggingin">Login Now!</h2>
            </label>
            <label for="logname">
              Name
            </label>
              <input name="logname" onChange={handleChange} placeholder="Name or Email"/>
            <label for="logpass">
              Password
            </label>
              <input name="logpass" onChange={handleChange} placeholder="Password"/>
            <label for="submitReq">
              Login
            </label>
            <button name="submitReq" type="submit">Login Now!</button>
          </form>
      </div>      
    );
}

export default Login;