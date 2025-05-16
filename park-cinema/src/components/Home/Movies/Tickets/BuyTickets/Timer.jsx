import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(180);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    alert("Zaman bitdi! Yenidən seçim edin.");
                    window.location.href = '/';
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    return <p 
        style={{color:"#d9dadb", padding:"60px", fontWeight:"bold"}}
        className="timer">Zaman: {minutes}:{seconds}</p>;
};

export default Timer;
