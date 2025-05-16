import React, { useState, useEffect } from 'react';
import './SeatSelector.css';
import { useNavigate } from 'react-router-dom';

const rows = 8;
const seatsPerRow = 10;
const seatPrice = 5;

const SeatSelector = ({movie}) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [takenSeats, setTakenSeats] = useState([]);
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const totalSeats = rows * seatsPerRow;
        const takenCount = Math.floor(totalSeats * 0.1);
        const taken = new Set();
        
        while (taken.size < takenCount) {
            const row = Math.floor(Math.random() * rows);
            const seat = Math.floor(Math.random() * seatsPerRow);
            taken.add(`${row}-${seat}`);
        }

        setTakenSeats(Array.from(taken));
    }, []);

    const navigate = useNavigate();

    const handleBuy = () => {
        navigate('/az/buytickets', {
            state: {
                selectedSeats,
                totalPrice: selectedSeats.length * seatPrice,
                movie,
            },
        });
    };

    const handleSeatClick = (row, seat) => {
        const id = `${row}-${seat}`;
        if (takenSeats.includes(id)) return;

        setSelectedSeats(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    return (
        <>
            <div className="seat-container">
                <div className="zoom-controls">
                    <button onClick={() => setZoom(zoom + 0.1)}>+</button>
                    <button onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>–</button>
                </div>

                <div className="seats" style={{ transform: `scale(${zoom})` }}>
                    {Array.from({ length: rows }, (_, rowIdx) => (
                    <div className="seat-row" key={rowIdx}>
                        <span className="row-label">{rows - rowIdx}</span>
                        {Array.from({ length: seatsPerRow }, (_, seatIdx) => {
                            const id = `${rowIdx}-${seatIdx}`;
                            const isSelected = selectedSeats.includes(id);
                            const isTaken = takenSeats.includes(id);

                            return (
                                <div
                                key={id}
                                className={`seat ${isSelected ? 'selected' : ''} ${isTaken ? 'taken' : ''}`}
                                onClick={() => handleSeatClick(rowIdx, seatIdx)}
                                >
                                <span className="tooltip">Böyük</span>
                                {seatsPerRow - seatIdx}
                                </div>
                            );
                        })}
                    </div>
                    ))}
                </div>
            </div>
            <div className="summaryPrice">
                <div className="price">
                    <p>Ümumi: {selectedSeats.length * seatPrice} AZN</p>
                    {selectedSeats.map(seat => {
                        const [row, seatIdx] = seat.split('-');
                        return (
                            <p 
                                style={{fontWeight:"400", fontSize:"16px"}} 
                                key={seat}>Sıra {rows - row}, Yer {seatsPerRow - seatIdx}
                            </p>
                        );
                    })}
                </div>
                <button onClick={handleBuy} className="buy-button">Bilet al</button>
            </div>
        </>
    );
};

export default SeatSelector;
