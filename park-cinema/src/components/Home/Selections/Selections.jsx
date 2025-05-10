import React from 'react';
import './Selections.css'
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useSelection } from '../../../contexts/SelectionsContext';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Selections({ languages, cinemas }) {
  const {
    language, languageOpen, setLanguageOpen, handleLanguageSelect,
    cinema, cinemaOpen, setCinemaOpen, handleCinemaSelect,
    selectedDate, setSelectedDate, resetSelections
  } = useSelection();

  const [clearButton, setClearButton] = useState(false);

  useEffect(() => {
    const isDefault = language === "Dil" && cinema === "Kinoteatr" && selectedDate.isSame(dayjs(), 'day');
    setClearButton(!isDefault);
  }, [language, cinema, selectedDate]);

  return (
    <div className="selections">

      {/* Language Picker*/}
      <div className="dropdown-wrapper">
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
      </div>

      {/* Cinema Picker*/}
      <div className="dropdown-wrapper">
        <div className="selectedCinema" onClick={() => {
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
      </div>

      {/* Date Picker */}
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
      
      {/* Clear button */}
      {clearButton && (
        <button className="clear-button" onClick={resetSelections}>Təmizlə</button>
      )}
    </div>
  );
}

export default Selections;