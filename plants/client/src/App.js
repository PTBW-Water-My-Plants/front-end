import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Form from './Form/Form';
import {BrowserRouter as Router, Route, Link, Switch, useParams} from 'react-router-dom';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const [userList,setUserList] = useState([]);
  const [loggedN,setLoggedN] = useState(false);

  useEffect(() => {
     const  getMovies = async() => {
      await axios
        .get('http://localhost:5000/api/plants') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });

        await axios
        .get('http://localhost:5000/api/users') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data);
          // setMovieList(response.data);
          setUserList(response.data);
        })
        .catch(error => {
          console.error('Server Error get users', error);
        });
    };


    getMovies();
  }, []); 

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
                <Form  />
          }
        </Route>
        <Route path="/plants/:movieID">
          <Movie  key={movieList.id} movies={movieList} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
