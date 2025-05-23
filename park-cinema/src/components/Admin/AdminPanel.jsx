import React from 'react';
import './AdminPanel.css'
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <section className='adminPanel'>
            <div className="container">
                <h1>Admin Panel</h1>
                <hr />
                <nav>
                    <Link to="films">Filmlər</Link>
                    <br />
                    <Link to="users">İstifadəçilər</Link>
                    <br />
                    <Link to="userTickets">Biletlər</Link>
                </nav>
                <Outlet />
                <div className="button">
                    <a href="/">
                        <button>Əsas səhifəyə qayıt</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;
