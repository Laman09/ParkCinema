import React, { useEffect, useState } from 'react';
import './AdminFilms.css'
import axios from 'axios';

const AdminFilms = () => {
    const [films, setFilms] = useState([]);
    const [newFilm, setNewFilm] = useState({ title: "", releaseDate: "" });

    useEffect(() => {
        axios.get("https://jsonfakery.com/movies/paginated").then(res => {
            const moviesWithDates = res.data.data.slice(0, 8).map(movie => ({
                ...movie,
                releaseDate: movie.release_date || movie.releaseDate || "Tarix yoxdur"
            }));
            setFilms(moviesWithDates);
        });
    }, []);


    const handleAddFilm = () => {
        const fakeFilm = {
            id: Math.random(),
            original_title: newFilm.title,
            releaseDate: newFilm.releaseDate,
        };
        setFilms(prev => [...prev, fakeFilm]);
        setNewFilm({ title: "", releaseDate: "" });
    };

    const handleDeleteFilm = (id) => {
        setFilms(prev => prev.filter(f => f.id !== id));
    };

    return (
        <section className='adminFilms'>
            <div className='container'>
                <h2>Filmləri İdarə Et</h2>
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
                <button className='add' onClick={handleAddFilm}>Əlavə et</button>
                <ul>
                    {films.map(film => (
                        <li key={film.id}>
                            {film.original_title} - {film.releaseDate || "Tarix yoxdur"}
                            <button 
                                className='delete' 
                                onClick={() => handleDeleteFilm(film.id)}>
                                Sil
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AdminFilms;
