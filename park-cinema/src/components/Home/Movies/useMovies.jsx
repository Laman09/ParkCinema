import { useEffect, useState } from 'react';
import axios from 'axios';

const getRandomDateWithinNextMonth = () => {
  const now = new Date();
  const nextMonth = new Date();
  nextMonth.setDate(now.getDate() + 30);
  const randomTime = now.getTime() + Math.random() * (nextMonth.getTime() - now.getTime());
  const randomDate = new Date(randomTime);

  const day = String(randomDate.getDate()).padStart(2, '0');
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const year = randomDate.getFullYear();

  return `${day}.${month}.${year}`;
};


export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const res = await axios.get('https://jsonfakery.com/movies/paginated');
        const moviesWithDates = res.data.data.map(movie => ({
          ...movie,
          releaseDate: getRandomDateWithinNextMonth(),
        }));
        setMovies(moviesWithDates);
      } catch (err) {
        setError('There is a problem');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return { movies, loading, error };
};

