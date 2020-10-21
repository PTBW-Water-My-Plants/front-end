import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom'


const Form =(props) => {
    const { runew } = props 
    const [changes, setChanges] = useState({id:0,name:"",email:"", password: "",chkevt:false})
  // Once the submit button is pressed this handles that state
    const [submited,setSubmited] = useState(false);
  // Once the user is logged in or regestered the state is handled here for this
    const [urin,setUrin] = useState(false);
    const [usrs,setUsrs] = useState({id:0,name:"",email:"",password:"",chkevt:false})
    const [res,setRes] = useState([]);
    const handleChange = (e) =>{
        e.persist();
        const ch= {...changes,[e.target.name]: e.target.value};
    
            setChanges(ch);
            // console.log(changes);
    };
    
    const handleSubmite = (e) =>{
        
        e.preventDefault();
        const ch= {...changes};
        console.log(e);
            setUsrs(ch);
            console.log(usrs)
            console.log(res);
        setSubmited(true);
        //  return {...changes};
        
            axios.post(`https://reqres.in/api/users`,changes)
            .then(evn =>{
                console.log('ev')
                console.log(evn);
                setRes(evn.data);
                
    
            })
            .catch(er =>{
                console.log(er);
            })
            
            
    };

    const handleChkChange = (e)  =>{
// TODO add the checked /term button into here
    }
    const handleSubmit = () =>{
        // Todo animate it with a loading id that animates the letters
        if(submited === null || submited === undefined){
            return (
                <div id="nowloading">
                    Loooadddiiing
                </div>
            );
        }
    }
    useEffect( () =>{
        
       
    },[])  ;  

    return (
       urin
       ?
       <div className="App">{handleSubmit()}
           <h1>Water your plants!</h1>
           {
               // Neseted terninary If statement with submited
               submited ?
                <div>
                    <p>
                        Future Main App component as a logged in user
                    </p>
                </div>

               :
               <form className="App">
               <input type="text" name="usrname" placeholder="User Name" onChange={e => handleChange} />
               <input type="password" placeholder="Enter Password" name="usrpass"  onChange={e => handleChange} />
               <button type="submit">Login</button>
           </form>
           }
       </div>
       :
       <div className="App">{handleSubmit()}
           <h1>Water your plants!</h1>
            { // Nested if statement 4 submited
                submited ? 
            <div id={res.id}>
                <h3>You've Regestered!</h3>
                <pre>{JSON.stringify(res,null,2)}</pre> 
                <p>Time to use your session token</p>
                </div> 
                
    
                : 
                
                <form className="App" onSubmit={handleSubmite}>
                     {handleSubmit()}
                     <h1>Sign Up, Right-Now!</h1>
                    <label>
                        Name
                    </label>
                    <input type="text" name="name" placeholder="Enter Name" onChange={e =>handleChange(e)} />
                    <label>
                        Password
                    </label>
                    <input type="password" name="password" placeholder="Enter Password" onChange={e =>handleChange(e)} />
                    <label>
                        E-mail
                    </label>
                    <input type="text" name="email" placeholder="Valid E-Mail"  onChange={e =>handleChange(e)} />
                    <Link to="/terms">
                        <label>
                            Terms Of Services
                        </label>
                    </Link>
                    <input type="checkbox" onChange={e =>handleChkChange(e) } />
                    <button type="submit" >Sign Me Up</button>
    
            </form>
            }
       </div>
    );
}

export default Form;