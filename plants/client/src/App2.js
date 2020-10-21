import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import {BrowserRouter as Router, Route, Link, Switch, useParams} from 'react-router-dom';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/plants') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
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
          <MovieList movies={movieList} />
        </Route>
        <Route path="/plants/:movieID">
          <Movie  key={movieList.id} movies={movieList} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
