import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BuyTickets.css';
import Timer from './Timer';

const BuyTickets = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { selectedSeats = [], totalPrice = 0, movie = {} } = state || {};

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const user = JSON.parse(localStorage.getItem('currentUser'));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agreed || !email || !phone || !selectedSeats.length) {
            alert("Zəhmət olmasa bütün məlumatları doldurun və oturacaq seçin.");
            return;
        }

        if (!user || email !== user.email || phone !== user.number) {
            alert("Email və ya nömrə qeydiyyat məlumatlarınızla uyğun gəlmir.");
            return;
        }

        const ticket = {
            userName: user?.name || 'Qeydiyyatsız',
            email,
            phone,
            movie: {
                title: movie.original_title,
                cinema: movie.cinema,
                releaseDate: movie.releaseDate,
                time: movie.time
            },
            selectedSeats,
            totalPrice,
        };

        const existing = JSON.parse(localStorage.getItem("tickets")) || [];
        localStorage.setItem("tickets", JSON.stringify([...existing, ticket]));
        
        alert("Bilet uğurla alındı!");
        navigate('/');
    };

    return (
        <section className="buyTickets">
            <div className="container">
                <div className="heading">
                    <h2>Ödəniş</h2>
                    <Timer />
                </div>

                <div className="inputBar">
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="email">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="number">
                                <input 
                                    type="text" 
                                    placeholder="+994 51 511 11 11" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="checkbox">
                                <input 
                                    type="checkbox" 
                                    name="agreement" 
                                    id="rule" 
                                    checked={agreed} 
                                    onChange={() => setAgreed(!agreed)}
                                />
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
                    <p 
                        style={{display:"flex", justifyContent:"end", fontWeight:"bold"}}>
                        Ümumi: {totalPrice} AZN
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BuyTickets;