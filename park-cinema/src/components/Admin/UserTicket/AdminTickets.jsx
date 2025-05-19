import React, { useEffect, useState } from 'react';
import './AdminTickets.css';

const AdminTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const savedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        setTickets(savedTickets);
    }, []);

    const handleDelete = (index) => {
        const confirmed = window.confirm("Bu bileti silmək istədiyinizə əminsiniz?");
        if (!confirmed) return;

        const updatedTickets = [...tickets];
        updatedTickets.splice(index, 1);
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));
        setTickets(updatedTickets);
    };

    const handleAllDelete = (index) => {
        const confirmed = window.confirm("Bu bileti tam silmək istədiyinizə əminsiniz?");
        if (!confirmed) return;

        const updated = [...tickets];
        updated.splice(index, 1);
        localStorage.setItem("tickets", JSON.stringify(updated));
        setTickets(updated);
    };

    return (
        <section className="adminTickets">
            <div className="container">
                <h2>Alınan Biletlər</h2>
                {tickets.length === 0 ? (
                    <p 
                        style={{color:"#d52b1e", textAlign:"center", padding:"20px", fontSize:"20px"}}
                    >
                        Hələ bilet alınmayıb.
                    </p>
                ) : (
                    <div className="ticketTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Film</th>
                                    <th>Kino</th>
                                    <th>Tarix</th>
                                    <th>Saat</th>
                                    <th>Yerlər</th>
                                    <th>Ümumi məbləğ</th>
                                    <th style={{borderRight:"none"}}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket, index) => (
                                    <tr key={index}>
                                        <td>{ticket.email}</td>
                                        <td>{ticket.movie.original_title || ticket.movie.title}</td>
                                        <td>{ticket.movie.cinema}</td>
                                        <td>{ticket.movie.releaseDate}</td>
                                        <td>{ticket.movie.time}</td>
                                        <td>
                                            {ticket.selectedSeats.map(seat => {
                                                const [row, seatIdx] = seat.split('-');
                                                return `Sıra ${8 - row}, Yer ${10 - seatIdx} `;
                                            }).join(', ')}
                                        </td>
                                        <td>{ticket.totalPrice} AZN</td>
                                        <td style={{ border: "none" }}>
                                            {ticket.status !== "Rədd edildi" ? (
                                                <button onClick={() => handleDelete(index)}>Sil</button>
                                            ) : (
                                                <button onClick={() => handleAllDelete(index)} style={{ backgroundColor: '#a8a8a8c3' }}>
                                                    Tam sil
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AdminTickets;
