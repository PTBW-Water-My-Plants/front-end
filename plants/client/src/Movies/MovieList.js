import React from 'react';
import { Link } from 'react-router-dom';
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props,key) {
  const { title, director, metascore } = props.movie;
console.log(props.movie);
  return (
    <Link to={`/plants/${props.movie.id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  </Link>
  );
}