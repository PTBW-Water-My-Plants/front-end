import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Form from './Form/Form';
import Fcomp from './Fcomp/Fcomp';
import {BrowserRouter as Router, Route, Link, Switch, useParams} from 'react-router-dom';

export default function App () {
  const { uid, name, password, email } = useParams();
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const [userList,setUserList] = useState([]);
  const [loggedN,setLoggedN] = useState(false);
  
  const [newU,setNewU] = useState(	{
		id: 0,
		name: 'Big stres' ,
		email: 'nias@nass.com',
		password: 'f3bigstairs3hf33',
		phone: '3422345444',

	});

  const handleSubmite = (changes) =>{
    // ev.preventDefault();
    const ch = {...changes};
    setNewU(ch);
    console.log('handledsubmite');
    console.log(newU);
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
        
        <Route exact path="/">
          {
            loggedN 
            ?
              <MovieList movies={movieList} />
              :
                <Form  handleSubmite={handleSubmite}/>
          }
        </Route>
        <Route path="/users/:uid">
            <Fcomp />
        </Route>
        <Route path="/plants/:movieID">
          <Movie  key={movieList.id} movies={movieList} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
