import React from 'react';
import { Link }  from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/trailer/${movie.id}`}>
      <img src={movie.posterURL} alt={movie.title} className='imageMovie' />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="rating">{movie.rating}</span>
      </div>
      <div className="movie-status">{movie.status}</div>
      
      </Link>
    </div>
  );
};

export default MovieCard;