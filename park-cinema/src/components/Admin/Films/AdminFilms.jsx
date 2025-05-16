import React, { useEffect, useState } from 'react';
import './AdminFilms.css'
import dayjs from 'dayjs';
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

const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 14) + 9;
    const minutes = Math.random() < 0.5 ? '00' : '30';
    return `${hours}:${minutes}`;
};

const cinemas = ["Park Bulvar", "Metro Park", "Flame Towers", "Sevinc Mall", "Shahdag"];

const AdminFilms = () => {
    const [films, setFilms] = useState([]);
    const [newFilm, setNewFilm] = useState({
        title: "",
        releaseDate: "",
        cinema: "",
        time: ""
    });

    useEffect(() => {
        axios.get("https://jsonfakery.com/movies/paginated").then(res => {
            const moviesWithExtra = res.data.data.slice(0, 8).map(movie => ({
                ...movie,
                original_title: movie.original_title,
                releaseDate: getRandomDateWithinNextMonth(),
                cinema: cinemas[Math.floor(Math.random() * cinemas.length)],
                time: getRandomTime(),
            }));
            setFilms(moviesWithExtra);
        });
    }, []);

    const handleAddFilm = () => {
        if (!newFilm.title) {
            alert("Zəhmət olmasa film adı daxil edin!");
            return;
        }

        const fakeFilm = {
            id: Math.random(),
            original_title: newFilm.title,
            releaseDate: newFilm.releaseDate || getRandomDateWithinNextMonth(),
            cinema: newFilm.cinema || cinemas[Math.floor(Math.random() * cinemas.length)],
            time: newFilm.time || getRandomTime()
        };

        setFilms(prev => [...prev, fakeFilm]);
        setNewFilm({ title: "", releaseDate: "", cinema: "", time: "" });
    };


    const handleDeleteFilm = (id) => {
        const confirmDelete = window.confirm("Bu filmi silmək istədiyinizə əminsiniz?");
        if (confirmDelete) {
            setFilms(prev => prev.filter(f => f.id !== id));
        }
    };

    return (
        <section className='adminFilms'>
            <div className='container'>
                <h2>Filmləri İdarə Et</h2>
                <div className="filmInputs">
                    <input
                        type="text"
                        placeholder="Film adı"
                        value={newFilm.title}
                        onChange={(e) => setNewFilm({ ...newFilm, title: e.target.value })}
                    />
                    <input
                        type="date"
                        value={newFilm.releaseDate}
                        onChange={(e) => setNewFilm({ ...newFilm, releaseDate: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Kinoteatr"
                        value={newFilm.cinema}
                        onChange={(e) => setNewFilm({ ...newFilm, cinema: e.target.value })}
                    />
                    <input
                        type="time"
                        value={newFilm.time}
                        onChange={(e) => setNewFilm({ ...newFilm, time: e.target.value })}
                    />
                    <button className='add' onClick={handleAddFilm}>Əlavə et</button>
                </div>
                <div className="filmTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Ad</th>
                                <th>Tarix</th>
                                <th>Kinoteatr</th>
                                <th>Saat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {films.map(film => (
                                <tr key={film.id}>
                                    <td>{film.original_title}</td>
                                    <td>{film.releaseDate}</td>
                                    <td>{film.cinema}</td>
                                    <td>{film.time}</td>
                                    <td style={{border:"none"}}>
                                        <button className='delete' onClick={() => handleDeleteFilm(film.id)}>Sil</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>  
                </div>
            </div>
        </section>
    );
};

export default AdminFilms;
