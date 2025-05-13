import React from 'react';
import './Schedule.css';
import { useMovies } from '../Movies/hooks/useMovies';
import { languageIcons } from '../../../utils/languageIcons';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 14) + 9;
  const minutes = Math.random() < 0.5 ? '00' : '30';
  return `${hours}:${minutes}`;
};

const Schedule = ({selectedLanguage, selectedCinema, selectedDate }) => {
  const { movies, loading, error } = useMovies();
  const navigate = useNavigate();

  const handleBuyClick = (movie) => {
    navigate('/az/tickets', { state: { movie } });
  };

  const filteredMovies = movies.filter(movie => {

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
    const sampleMovies = filteredMovies.slice(0, 12);

    return (
        <div className="container">
            <table className="schedule-table">
                <tbody>
                    {sampleMovies.map((movie, index) => (
                        <tr key={index}>
                            <td>{getRandomTime()}</td>
                            <td>{movie.original_title}</td>
                            <td>{movie.cinema}</td>
                            <td>{Math.random() > 0.5 ? '2D' : '3D'}</td>
                            <td>
                                {movie.original_language && languageIcons[movie.original_language.toLowerCase()] && (
                                    <img
                                        src={languageIcons[movie.original_language]}
                                        alt={movie.original_language}
                                        className="flag-icon"
                                    />
                                )}
                            </td>
                            <td className='sub'>{Math.random() > 0.5 ? 'AZE sub' : 'Altyazı yoxdur'}</td>
                            <td>
                                <a href="/az/tickets">
                                    <button onClick={() => handleBuyClick(movie)} className="buy-button">Bilet Al</button>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
