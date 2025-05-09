import React, { useState } from 'react';
import { useMovies } from './useMovies';
import { languageIcons } from '../../../utils/languageIcons';
import './Movies.css';

const Movies = ({ filter }) => {
  const { movies, loading, error } = useMovies();
  const today = new Date();

  const filteredMovies = movies.filter(movie => {
    const movieDate = new Date(movie.releaseDate);
    if (filter === 'upcoming') {
      return movieDate > today;
    }
    return true;
  });

  if (loading) return <p>Yüklənir...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-cards">
        {filteredMovies.slice(0, 12).map(movie => (
            <div key={movie.id} className="movie-card">
                <img src={movie.poster_path} alt={movie.original_title} />
                <h3>{movie.original_title}</h3>
                <p>{movie.releaseDate}</p>
                <div className="movie-info">
                    <p>Popularity: {movie.popularity}</p>
                    {movie.original_language && languageIcons[movie.original_language.toLowerCase()] && (
                    <img
                        src={languageIcons[movie.original_language]}
                        alt={movie.original_language}
                        className="flag-icon"
                    />
                    )}
                </div>
            </div>
        ))}
    </div>
  );
};

export default Movies;
