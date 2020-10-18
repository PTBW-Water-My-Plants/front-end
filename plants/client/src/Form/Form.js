import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, useHistory, Link } from 'react-router-dom'


const Form =(props) => {
    const  history  = useHistory();
    const { runew } = props 
    const [changes, setChanges] = useState({id:0,name:"",email:"", password: "",chkevt:false})
  // Once the submit button is pressed this handles that state
    const [submited,setSubmited] = useState(false);
  // Once the user is logged in or regestered the state is handled here for this
    const [urin,setUrin] = useState(false);
    const [usrs,setUsrs] = useState({id:0,name:"",email:"",password:"",phone:''})
    const [res,setRes] = useState([]);
    const handleChange = (e) =>{
        e.persist();
        const ch= {...changes,[e.target.name]: e.target.value};
    
            setChanges(ch);
    //    if(submited){
    //        setUsrs(ch);
    //    }
            // console.log(changes);
    };


    const clickedup = (e)=>{
           e.persist();
        // e.persist();
        // setSubmited(true);
        const ch= {...changes,[e.target.name]: e.target.value};
        setUsrs({...changes});
        setSubmited(true);
}

    const btnChange = (e)=>{
           
            e.persist();
            // setSubmited(true);
           
            const ch= {...changes,[e.target.name]: e.target.value};
        
            setUsrs({...changes,[e.target.name]: e.target.value});
            // setSubmited(true);
        
    }
    
    const  handleSubmite = (e) =>{
   

       
        if(submited){
            
        e.preventDefault();
        const ch= {...changes};
        console.log(e);
            // setUsrs(changes);
            console.log(usrs)
            console.log(res);
            history.push(`/users/?uid=${usrs.id}&name=${usrs.name}&password=${usrs.password}&email=${usrs.email}`)

        //  return {...changes};
        props.handleSubmite(usrs);
        }
        
            
          
            
    };

    const postit = () =>{
                
       if(submited){
        axios.post(`http://localhost:5000/api/users/`,usrs)
        .then(evn =>{
            console.log('ev')
            console.log(evn);
            setRes(evn.data);
          
            
        })
        .catch(er =>{
            console.log(er);
        })
       }
    }

    useEffect( () =>{
        // if(submited){
        //     setUsrs(changes);
        // }
        postit();
    },[submited])

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
    // useEffect( () =>{
        
       
    // },[])  ;  

    return (
      
       <div className="App">
           <h1>Water your plants!</h1>
            { // Nested if statement 4 submited
          
                <form className="App"   onChange={e => btnChange(e)}  onSubmit={handleSubmite}>
                     
                     <h1>Sign Up, Right-Now!</h1>
                    <label>
                        Name
                    </label>
                    <input data-cy="namer" type="text" name="name" placeholder="Enter Name" onChange={e =>handleChange(e)} />
                    <label>
                        Password
                    </label>
                    <input data-cy="password" type="password" name="password" placeholder="Enter Password" onChange={e =>handleChange(e)} />
                    <label>
                        E-mail
                    </label>
                    <input type="text" data-cy="email" name="email" placeholder="Valid E-Mail"  onChange={e =>handleChange(e)} />
                    <Link to="/terms">
                        <label>
                            Terms Of Services
                        </label>
                    </Link>
                    <input type="checkbox" onChange={e =>handleChkChange(e) } />
                    <button type="submit" onClick={clickedup} disabled={submited} >Sign Me Up</button>
    
            </form>
            }
       </div>
    );
}

export default Form;