import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [userTickets, setUserTickets] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const allTickets = JSON.parse(localStorage.getItem("tickets")) || [];

        setUser(currentUser);

        if (currentUser) {
            const filtered = allTickets.filter(ticket => ticket.email === currentUser.email);
            setUserTickets(filtered);
        }
    }, []);

    if (!user) {
        return <p 
            style={{ textAlign: 'center', backgroundColor: '#373737', padding: '20px', color: '#d52b1e' }}>
                Zəhmət olmasa əvvəlcə giriş edin.
            </p>;
    }

    const handleCancelTicket = (ticketToCancel) => {
        const confirmed = window.confirm("Bu bileti silmək istədiyinizə əminsiniz?");
        if (!confirmed) return;

        const allTickets = JSON.parse(localStorage.getItem("tickets")) || [];

        const updatedTickets = allTickets.map(ticket => {
            if (
                ticket.email === ticketToCancel.email &&
                ticket.movie.title === ticketToCancel.movie.title &&
                ticket.movie.time === ticketToCancel.movie.time &&
                JSON.stringify(ticket.selectedSeats) === JSON.stringify(ticketToCancel.selectedSeats)
            ) {
                return { ...ticket, status: "Rədd edildi" };
            }
            return ticket;
        });

        localStorage.setItem("tickets", JSON.stringify(updatedTickets));

        const remaining = updatedTickets.filter(
            ticket => ticket.email === ticketToCancel.email && ticket.status !== "Rədd edildi"
        );
        setUserTickets(remaining);
    };

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/az/sign-in");
    };

    return (
        <section className="login">
            <div className="container">
                <h2>Xoş gəldiniz, {user.name} {user.surname}!</h2>
                <h3>Alınan biletləriniz:</h3>

                {userTickets.length === 0 ? (
                    <p 
                        style={{color:"#d52b1e", textAlign:"center", padding:"20px", fontSize:"20px"}}
                    >
                        Hələ bilet almamısınız.
                    </p>
                ) : (
                    <div className="ticket-list">
                        {userTickets.map((ticket, index) => (
                            <div className="ticket-card" key={index}>
                                <h4>{ticket.movie.title}</h4>
                                <p><strong>Kino:</strong> {ticket.movie.cinema}</p>
                                <p><strong>Vaxt:</strong> {ticket.movie.releaseDate} {ticket.movie.time}</p>
                                <p><strong>Oturacaqlar:</strong> {ticket.selectedSeats.map(seat => {
                                    const [row, seatNum] = seat.split("-");
                                    return ` Sıra ${8 - row}, Yer ${10 - seatNum}`;
                                }).join(",")}</p>
                                <p><strong>Qiymət:</strong> {ticket.totalPrice} AZN</p>
                                <button onClick={() => handleCancelTicket(ticket)}>
                                    Sil
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="logout">
                    <button onClick={handleLogout}>
                        Çıxış et
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Profile;
