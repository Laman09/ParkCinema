import React, { createContext, useState, useContext} from 'react';
import dayjs from 'dayjs';

const SelectionsContext = createContext();

export const SelectionsProvider = ({children}) => {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [cinemaOpen, setCinemaOpen] = useState(false);

    const [language, setLanguage] = useState("Dil");
    const [cinema, setCinema] = useState("Kinoteatr");

    const [selectedDate, setSelectedDate] = useState(dayjs());

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
    };

    return(
        <SelectionsContext.Provider value={{
            language, setLanguage, languageOpen, setLanguageOpen, handleLanguageSelect,
            cinema, setCinema, cinemaOpen, setCinemaOpen, handleCinemaSelect,
            selectedDate, setSelectedDate, resetSelections
        }}>
            {children}
        </SelectionsContext.Provider>
    );
}

export const useSelection = () => useContext(SelectionsContext);