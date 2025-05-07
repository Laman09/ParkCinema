import React, { useState } from 'react';
import "./Home.css";
import { TextField, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Movies from './Movies/Movies';
import dayjs from 'dayjs';

const Home = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [cinemaOpen, setCinemaOpen] = useState(false);

  const [language, setLanguage] = useState("Dil");
  const [cinema, setCinema] = useState("Kinoteatr");

  const languages = ["AZ", "TR", "RU", "EN"];
  const cinemas = ["Park Bulvar", "Metro Park", "Flame Towers", "Sevinc Mall", "Shahdag"];

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  const handleCinemaSelect = (place) => {
    setCinema(place);
    setCinemaOpen(false);
  };

  return (
    <section className="list">
      <div className="headings">
        <ul id='movies'>
          <li><a href="/az">Siyahı</a></li>
          <li style={{ textShadow: "none" }}><a href="/az/trailers">Treylerlər</a></li>
        </ul>
        <ul id='schedule'>
          <li>Hamısı</li>
          <li>Tezliklə</li>
          <li>Cədvəl</li>
        </ul>
      </div>

      <div className="selections">
        {/* Language */}
        <div className="selectedLanguage" onClick={() => {
          setLanguageOpen(!languageOpen);
          setCinemaOpen(false);
        }}>
          <span>{language}</span>
          <span className={`arrow ${languageOpen ? "up" : "down"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="currentColor" d="m12 16l-6-6h12z" />
            </svg>
          </span>
        </div>
        {languageOpen && (
          <div className="dropdownLanguage">
            <div className="dropdown-header">Dil</div>
            {languages.map((lang) => (
              <div key={lang} className="dropdown-item" onClick={() => handleLanguageSelect(lang)}>
                {lang}
              </div>
            ))}
          </div>
        )}

        {/* Cinema */}
        <div className="selectedCinema" 
          onClick={() => {
            setCinemaOpen(!cinemaOpen);
            setLanguageOpen(false);
          }}>
            <span>{cinema}</span>
            <span className={`arrow ${cinemaOpen ? "up" : "down"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="currentColor" d="m12 16l-6-6h12z" />
              </svg>
            </span>
        </div>
        {cinemaOpen && (
          <div className="dropdownCinema">
            <div className="dropdown-header">Kinoteatr</div>
            {cinemas.map((place) => (
              <div key={place} className="dropdown-item" onClick={() => handleCinemaSelect(place)}>
                {place}
              </div>
            ))}
          </div>
        )}

        <Box className="date-picker-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              format="DD-MM-YYYY"
              slotProps={{
                textField: {
                variant: 'standard',
                placeholder: 'DD-MM-YYYY',
                InputProps: { disableUnderline: true },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      </div>

      <div className="movies">
        <Movies />
      </div>
    </section>
  );
};

export default Home;