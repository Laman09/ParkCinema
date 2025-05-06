import {React, useState, useEffect} from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonfakery.com/movies/simple-paginate")
        .then(response => response.json())
        .then(data => {
            setMovies(data.results || []);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching movies:", error);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading movies...</div>;

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {movies.map((movie, index) => (
          <div key={index} style={{
            backgroundColor: '#222',
            padding: '10px',
            borderRadius: '10px',
            width: '200px'
          }}>
            <img
              src={movie.posterUrl}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
            <p>{movie.ageRating}+</p>
            {/* Example: countryFlags: ['🇷🇺', '🇺🇸'] */}
            <div>{movie.countryFlags?.join(" ")}</div>
          </div>
        ))}
      </div>
    )
}
export default Movies