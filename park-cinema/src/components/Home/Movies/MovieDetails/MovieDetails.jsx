import React from 'react';
import { useLocation } from 'react-router-dom';
import {languageIcons} from '../../../../utils/languageIcons'
import './MovieDetails.css';

const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 14) + 9;
    const minutes = Math.random() < 0.5 ? '00' : '30';
    return `${hours}:${minutes}`;
};

const MovieDetails = () => {
    const { state } = useLocation();
    const movie = state?.movie;

    if (!movie) {
        return <p>Film məlumatı tapılmadı.</p>;
    }

    return (
        <section className="movie-details">
            <div className="container">
                <div className="info">
                    <img className="poster" src={movie.poster_path} alt={movie.original_title} />
                    <div className="info-details">
                        <h2>{movie.original_title}</h2>
                        <p>
                            <strong style={{marginRight:"5px"}}>Tarix:</strong> 
                            {movie.releaseDate}
                        </p>
                        <p>
                            <strong style={{marginRight:"5px"}}>Seans:</strong> 
                            {getRandomTime()}
                        </p>
                        <p >
                            <strong style={{marginRight:"5px"}}>Dil:</strong>
                            {movie.original_language && languageIcons[movie.original_language.toLowerCase()] && (
                            <img src={languageIcons[movie.original_language]} alt={movie.original_language} className="flag-icon" />
                            )}
                        </p>
                        <p>
                            <strong style={{marginBottom:"0"}}>Aktyorlar:</strong> 
                            {movie.casts?.slice(0, 5).map(actor => actor.name).join(', ')}
                        </p>
                        <p style={{marginTop:"50px"}}>{movie.overview}</p>
                    </div>
                </div>

                <div className="trailer">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/neUUWzBsumk?si=6sDtFXHls9X7W_bn" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;
