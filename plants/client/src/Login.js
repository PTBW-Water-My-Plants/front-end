

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link, useHistory } from 'react-router-dom'
import Fcomp from './Fcomp/Fcomp';

// TODO: Make a forgot password link

const Login =(props) => {
  const history = useHistory();
  const { uL } = props;
  const [usrs,setUsrs] = useState({id:0,name:"",email:"",
  password:""})
  const [res,setRes] = useState([]);
  const [logged,setLogged] = useState(false);
  const handleChange = (e) =>{
      e.persist();
      const ch= {...usrs,[e.target.name]: e.target.value};
  
          setUsrs(ch);
  //    if(submited){
  //        setUsrs(ch);
  //    }
  
          console.log(usrs);
  };

  const submited = (e) =>{
    e.preventDefault();

    setLogged(true);
    console.log('find  '+usrs.logname);
    // console.log(uL[uL.length -1].name);

    const inthere = uL.filter(u => 
     u.name  === usrs.logname && u.password === usrs.logpass );
    
    if(inthere.length > 0){
      console.log("FOUND USER")
      console.log(JSON.stringify(inthere));
      setRes(inthere);
      history.push(`/login?logname=${inthere[inthere.length-1].name}&logpass${inthere[inthere.length-1].password}&submitReq=on`);
    }else{
      console.log('Nope is not in there')
    }
    
    // props.handleLogin(inthere);
  };

    return (
      logged
      ?
        <Fcomp />
        :
      <div className="App">
          <form className="App" onSubmit={submited}>
            <label htmlFor="loggingin">
              Plant Login Form
                <h2 name="loggingin">Login Now!</h2>
            </label>
            <label htmlFor="logname">
              Name
            </label>
              <input name="logname" onChange={handleChange} placeholder="Name or Email"/>
            <label htmlFor="logpass">
              Password
            </label>
              <input name="logpass" onChange={handleChange} placeholder="Password"/>
            <label htmlFor="submitReq">
              Login
            </label>
            <button name="submitReq" type="submit" >Login Now!</button>
          </form>
      </div>      
    );
}

export default Login;