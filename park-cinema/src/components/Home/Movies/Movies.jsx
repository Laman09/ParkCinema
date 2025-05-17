import React from 'react';
import { useMovies } from './hooks/useMovies';
import { useNavigate } from 'react-router-dom';
import { languageIcons } from '../../../utils/languageIcons';
import './Movies.css';
import dayjs from 'dayjs';

const Movies = ({ filter, selectedLanguage, selectedCinema, selectedDate }) => {
  const { movies, loading, error } = useMovies();
  const navigate = useNavigate();

  const filteredMovies = movies.filter(movie => {
    const movieDate = dayjs(movie.releaseDate, 'DD.MM.YYYY');
    const today = dayjs();

    if (filter === 'upcoming' && movieDate <= today) {
      return false;
    }

    if (selectedLanguage && selectedLanguage !== 'Dil') {
      if (movie.original_language.toLowerCase() !== selectedLanguage.toLowerCase()) {
        return false;
      }
    }

    if (selectedCinema && selectedCinema !== 'Kinoteatr') {
      if (movie.cinema !== selectedCinema) {
        return false;
      }
    }

    if (selectedDate && !selectedDate.isSame(dayjs(), 'day')) {
      const movieDay = dayjs(movie.releaseDate, 'DD.MM.YYYY');
      if (!movieDay.isSame(selectedDate, 'day')) {
        return false;
      }
    }

    return true;
});

  if (loading) 
    return <p style={{textAlign:"center", color:"#d9dadb", padding:"50px", fontSize:"18px"}}>
      Yüklənir...
    </p>;
  if (error) 
    return <p style={{textAlign:"center", color:"#d9dadb", padding:"50px", fontSize:"18px"}}>
      {error}
    </p>;

  if (filteredMovies.length === 0) {
    return <p style={{textAlign:"center", color:"#d9dadb", padding:"50px", fontSize:"18px"}}>
        Seçdiyiniz kriteriyalara uyğun film tapılmadı.
      </p>;
  }
  
  return (
    <section className='movies'>
      <div className="movie-cards">
        {filteredMovies.slice(0, 12).map(movie => (
          <div 
            key={movie.id} 
            className="movie-card" 
            onClick={() => navigate(`/movies/${movie.id}`, { state: { movie } })}
          >
            <img src={movie.poster_path} alt={movie.original_title} />
            <h3>{movie.original_title}</h3>
            <p>{movie.releaseDate}</p>
            <p>Cinema: {movie.cinema}</p>
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
    </section>
  );
};

export default Movies;
