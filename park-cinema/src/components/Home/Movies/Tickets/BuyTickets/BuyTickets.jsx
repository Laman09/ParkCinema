import React from 'react';
import { useLocation } from 'react-router-dom';
import './BuyTickets.css';
import Timer from './Timer';

const BuyTickets = () => {
    const { state } = useLocation();
    const { selectedSeats = [], totalPrice = 0, movie = {} } = state || {};

    return (
        <section className="buyTickets">
            <div className="container">
                <div className="heading">
                    <h2>Ödəniş</h2>
                    {/* <Timer /> */}
                </div>

                <div className="inputBar">
                    <form>
                        <div className="inputs">
                            <div className="email">
                                <input type="email" placeholder="Email" required />
                            </div>
                            <div className="number">
                                <input type="text" placeholder="+994 51 511 11 11" required />
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="agreement" id="rule" />
                                <label htmlFor="rule">Mən Qaydalar və Şərtlər oxudum və razıyam.</label>
                            </div>
                        </div>
                        <div className="button">
                            <button>Ödənişə keç</button>
                        </div>
                    </form>
                </div>
                
                <div className="ticket">
                    <h2>{movie.original_title}</h2>
                    <p>{movie.cinema}</p>
                    <p>{movie.releaseDate} {movie.time}</p>
                    <ul style={{listStyle:"none"}}>
                        {selectedSeats.map((seat, index) => {
                            const [row, seatIdx] = seat.split('-');
                            return (
                                <li key={index}>
                                    Sıra {8 - row}, Yer {10 - seatIdx}
                                </li>
                            );
                        })}
                    </ul>
                    <p style={{display:"flex", justifyContent:"end"}}>Ümumi: {totalPrice} AZN</p>
                </div>
            </div>
        </section>
    );
};

export default BuyTickets;
