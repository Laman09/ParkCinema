import React, { createContext, useState, useContext, useEffect } from 'react';
import dayjs from 'dayjs';

const SelectionsContext = createContext();

export const SelectionsProvider = ({ children }) => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [cinemaOpen, setCinemaOpen] = useState(false);

  const [language, setLanguage] = useState(() => localStorage.getItem('language') || "Dil");
  const [cinema, setCinema] = useState(() => localStorage.getItem('cinema') || "Kinoteatr");
  const [selectedDate, setSelectedDate] = useState(() => {
    const storedDate = localStorage.getItem('selectedDate');
    return storedDate ? dayjs(storedDate) : dayjs();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('cinema', cinema);
  }, [cinema]);

  useEffect(() => {
    localStorage.setItem('selectedDate', selectedDate.toISOString());
  }, [selectedDate]);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  const handleCinemaSelect = (place) => {
    setCinema(place);
    setCinemaOpen(false);
  };

  const resetSelections = () => {
    setLanguage("Dil");
    setCinema("Kinoteatr");
    setSelectedDate(dayjs());

    localStorage.removeItem('language');
    localStorage.removeItem('cinema');
    localStorage.removeItem('selectedDate');
  };

  return (
    <SelectionsContext.Provider value={{
      language, setLanguage, languageOpen, setLanguageOpen, handleLanguageSelect,
      cinema, setCinema, cinemaOpen, setCinemaOpen, handleCinemaSelect,
      selectedDate, setSelectedDate, resetSelections
    }}>
      {children}
    </SelectionsContext.Provider>
  );
};

export const useSelection = () => useContext(SelectionsContext);
