import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Form from './Form/Form';
import Fcomp from './Fcomp/Fcomp';
import {BrowserRouter as Router, Route, Link, Switch, useParams} from 'react-router-dom';

export default function App () {
  const { uid, name, password, email, logname, logpass } = useParams();
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  // Our response from querying /api/users
  const [userList,setUserList] = useState([]);
  const [loggedN,setLoggedN] = useState(false);
  
  const [newU,setNewU] = useState(	{
		id: 0,
		name: 'Big stres' ,
		email: 'nias@nass.com',
		password: 'f3bigstairs3hf33',
		phone: '3422345444',

	});
const handleLogin = (user) =>{


  console.log(user);
}
  const handleSubmite = (changes) =>{
    // ev.preventDefault();
    const ch = {...changes};
    setNewU(ch);
    console.log('handledsubmite');
    console.log(newU);
    setLoggedN(true);
  }
  useEffect(() => {
    const uId = uid;
    const theE = email;
    console.log(uId);
     const  getMovies = () => {
      // await axios
      //   .get('http://localhost:5000/api/plants') // Study this endpoint with Postman
      //   .then(response => {
      //     console.log(response.data);
      //     setMovieList(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Server Error', error);
      //   });

      // https://watertheplants.herokuapp.com/api/auth/login register: https://watertheplants.herokuapp.com/api/auth/register
//https://watertheplants.herokuapp.com/api/auth/register
/**
 * Jonathan Stickrod  18:17
login: https://watertheplants.herokuapp.com/api/auth/login register: https://watertheplants.herokuapp.com/api/auth/register

Ben Dennett  18:20
get/post: https://watertheplants.herokuapp.com/api/plants (edited) 
18:22
put/delete: https://watertheplants.herokuapp.com/api/plants/:id   Slightly cuter and more complete version of plant endpoints: https://documenter.getpostman.com/view/12284941/TVYC9KV7 (edited) 

 */

        if(loggedN === false){
           axios
        .get(`http://localhost:5000/api/users`) // Study this endpoint with Postman
        .then(response => {
          console.log(response.data);
          // setMovieList(response.data);
          setUserList(response.data);
    
        })
        .catch(error => {
          console.error('Server Error get users', error);
        });
        }
    };


    

    getMovies();
  }, [loggedN]); 

  const addToSavedList = id => {
    
  };

  return (
    <Router>
    <SavedList list={[ /* This is stretch */]} />
    <div>
      <Switch>
        
        <Route  exact path="/">
          {
            // loggedN 
            // ?
            //   <Login  />
            //   :
            //     <Form  handleSubmite={handleSubmite}/>
         
         
         }
         <MovieList movies={movieList} />
        </Route>
        <Route path="/register">
          <Form  handleSubmite={handleSubmite}/>
        </Route>
        <Route path="/login">
          <Login  uL={userList} />
        </Route>
        <Route path="/login/?:logname&:logpass">
          {/* <Login submited={handleLogin}uL={userList} /> */
             <Fcomp props={newU}/> 
          
          
          }
        </Route>
        
        <Route  path="/plants">
          <MovieList movies={movieList} />
        </Route>
        <Route path="/users/?:uid&:name&:password&:email">
           <Fcomp email=":name"/> 
        </Route>
        <Route path="/plants/:movieID">
          <Movie  key={movieList.id} movies={movieList} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
