import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedList(props) {
  return (
    <>

<div className="saved-list">
      <div className="home-button">
        <Link to="/plants" >
        Home
        </Link>
      </div>
        <div className="home-button">
          <Link to="/login" >
          Login
          </Link>
        </div>
        <div className="home-button">
          <Link to="/register" >
          Register
          </Link>
        </div>
  </div>
  ,
    <div className="saved-list">
      <h3>Saved Plants:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      
    </div>


    </>
  );
}
