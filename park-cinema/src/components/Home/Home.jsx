import React, { useState } from 'react';
import "./Home.css";
import Movies from './Movies/Movies';
import Selections from './Selections/Selections';
import BackgroundSlider from '../Layout/BackgroundSlider';
import { useSelection } from '../../contexts/SelectionsContext';

const Home = () => {
  const languages = ["RU", "EN", "FR"];
  const cinemas = ["Park Bulvar", "Metro Park", "Flame Towers", "Sevinc Mall", "Shahdag"];

  const { language, cinema, selectedDate } = useSelection();
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
    <BackgroundSlider />
    <section className="list">
      <div className="headings">
        <ul id='films'>
          <li><a href="/az">Siyahı</a></li>
          <li style={{ textShadow: "none" }}><a href="/az/trailers">Treylerlər</a></li>
        </ul>
        <ul id='schedule'>
          <div className="filterButtons">
            <button
              onClick={() => handleFilterChange('all')}
              className={filter === 'all' ? 'active' : ''}
            >
              Hamısı
            </button>
            <button
              onClick={() => handleFilterChange('upcoming')}
              className={filter === 'upcoming' ? 'active' : ''}
            >
              Tezliklə
            </button>
            <button
              onClick={() => handleFilterChange('schedule')}
              className={filter === 'schedule' ? 'active' : ''}
            >
              Cədvəl
            </button>
          </div>
        </ul>
      </div>
      <Selections languages={languages} cinemas={cinemas} />
      <div className="movies">
        <Movies filter={filter} selectedLanguage={language} selectedCinema={cinema} selectedDate={selectedDate} />
      </div>
    </section>
    </>
  );
};

export default Home;