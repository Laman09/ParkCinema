import React from 'react';
import { useLocation } from 'react-router-dom';
import './Tickets.css';
import SeatSelector from './SeatSelector/SeatSelector';

const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 14) + 9;
  const minutes = Math.random() < 0.5 ? '00' : '30';
  return `${hours}:${minutes}`;
};

const Tickets = () => {
    const { state } = useLocation();
    const movie = state?.movie;

    if (!movie) {
      return <p>Film tapılmadı.</p>;
    }

    return (
        <div className="ticket-container">
            <h2>Oturacaq Seçimi</h2>
            <div className="ticket-box">
                <img src={movie.poster_path} alt={movie.original_title} className="ticket-poster" />
                <div className="ticket-info">
                    <h3>{movie.original_title}</h3>
                    <p>
                        <strong>
                            {Math.random() > 0.5 ? '2D' : '3D'}
                        </strong>
                    </p>
                    <p>
                        <strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                            <path fill="currentColor" d="M21 8.5v9.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5zM7.25 15a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M12 15a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-4.75-4.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.75 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m4.75 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m1-7.5A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3z" />
                            </svg>
                        </strong>
                        {movie.releaseDate}
                    </p>
                    <p>
                        <strong>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                            <g fill="none">
		                            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		                            <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1" />
	                            </g>
                            </svg>
                        </strong>
                        {getRandomTime()}
                    </p>
                    <p>
                        <strong>Dil:</strong> 
                        {movie.original_language.toUpperCase()}
                    </p>
                    <p>
                        <strong>Kinoteatr:</strong>
                        {movie.cinema}
                    </p>
                    <p>
                        <strong>Müddət:</strong>
                        {movie.runtime || '01:30:00'}
                    </p>
                </div>
            </div>

            <div className="legend">
                <div className="seat-info">
                    <span className="available">
                        <div></div>
                        Mövcuddur
                    </span>
                    <span className="taken">
                        <div></div>
                        Tutulmuş
                    </span>
                    <span className="selected">
                        <div></div>
                        Seçilmiş
                    </span>
                </div>
                <div className="price" style={{color: "#d9dadb"}}>
                    <p>Böyük <strong>5 AZN</strong></p>
                </div>
            </div>

            <div className="seatSelector">
                <SeatSelector />
            </div>
        </div>
    );
};

export default Tickets;
