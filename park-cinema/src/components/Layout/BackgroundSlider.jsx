import React, { useEffect, useState } from 'react';
import './BackgroundSlider.css'

const images = [
    "https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744886126249_1744886126249_minecraft__sayt_banner.png&w=3840&q=75",
    "https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744885620693_1744885620693_belkede_sayt_banner.png&w=3840&q=75",
    "https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744884456470_1744884456469_tagiyev__sayt_banner.png&w=3840&q=75",
    "https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744883815570_1744883815569_wolt_post_sayt_banner.png&w=3840&q=75"
];

const overlayImage = "https://new.parkcinema.az/_next/image?url=%2Fimages%2Foverlay.png&w=384&q=75";

const BackgroundSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    
    const nextImage = () => {
        console.log("Button clicked");
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);
    
    return(
        <div className="backgroundImages">
            <img src={images[currentImage]} alt="background" className="bgSlide" />
            <img src={overlayImage} alt="overlay" className="bgOverlay" />
            <button onClick={nextImage} className="nextButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 5l6 7l-6 7" />
                </svg>
            </button>
            {/* <button onClick={()=>(console.log("Button clicked"))} className="nextButton">Next</button> */}
        </div>
    )
}

export default BackgroundSlider