import React from 'react'
import { Outlet, Link } from "react-router-dom"
import "./Layout.css"
// import { useEffect, useState } from "react";

// const backgroundImages = [
//   "url(https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744886126249_1744886126249_minecraft__sayt_banner.png&w=3840&q=75)",
//   "url('https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744885620693_1744885620693_belkede_sayt_banner.png&w=3840&q=75')",
//   "url('https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744884456470_1744884456469_tagiyev__sayt_banner.png&w=3840&q=75')",
//   "url('https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744883815570_1744883815569_wolt_post_sayt_banner.png&w=3840&q=75')",
// ];

const Layout = () => {
    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const savedIndex = localStorage.getItem("bgIndex");
    //     if (savedIndex !== null) {
    //         setIndex(parseInt(savedIndex, 10));
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("bgIndex", index.toString());
    // }, [index]);

    // const nextImage = () => {
    //     setIndex((prev) => (prev + 1) % backgroundImages.length);
    // };
    return(
        <>
            <header>
                <div className="backgroundImages">
                    {/* <button
                        onClick={nextImage}
                        className="bg-white/70 text-xl p-3 rounded-full shadow hover:bg-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 5l6 7l-6 7" />
                        </svg>
                    </button> */}
                </div>
                <div className="container">
                    <div className="logo">
                        <a href="/az">
                            <img src="https://new.parkcinema.az/images/logo.svg" alt="cinema_logo" />
                        </a>
                    </div>
                    <div className="navLinks">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/az/cinemas">Kinoteatrlar</Link>
                                </li>
                                <li>
                                    <Link to="/az/campaigns">Aksiyalar</Link>
                                </li>
                                <li>
                                    <Link to="/az/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/az/contact">Əlaqə</Link>
                                </li>
                                <li>
                                    <Link to="/az/sign-in">Profil</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Outlet />
            </header>
            <footer>
                <div className="container">
                    <ul>
                        <li className='logo'>
                            <img src="https://new.parkcinema.az/images/logo.svg" alt="cinema_logo" />
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="/az/cinemas">Kinoteatrlar</a>
                                </li>
                                <li>
                                    <a href="/az/campaigns">Aksiyalar</a>
                                </li>
                                <li>
                                    <a href="/az/faq">FAQ</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="/az/sign-in">Profil</a>
                                </li>
                                <li>
                                    <a href="/az/contact">Əlaqə</a>
                                </li>
                                <li>
                                    <a href="/az/term-conditions">Hüquqi Şərtlər</a>
                                </li>
                            </ul>
                        </li>
                        <li className='thcolumn'>
                            <p>Bizi izləyin</p>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/parkcinema/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                                        <path fill="currentColor" d="M20.947 8.305a6.5 6.5 0 0 0-.419-2.216a4.6 4.6 0 0 0-2.633-2.633a6.6 6.6 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.6 6.6 0 0 0-2.185.42a4.6 4.6 0 0 0-2.633 2.633a6.6 6.6 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.6 6.6 0 0 0 2.186-.419a4.62 4.62 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078" />
	                                        <circle cx="11.994" cy="11.979" r="3.003" fill="currentColor" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.facebook.com/ParkCinema">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                                        <path fill="currentColor" d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14a12 12 0 0 1 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.youtube.com/@ParkCinemaAzerbaijan">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                                        <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://t.me/parkcinemaofficial">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                                        <path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-9.642-2.618q-1.458.607-5.831 2.513q-.711.282-.744.552c-.038.304.343.424.862.587l.218.07c.51.166 1.198.36 1.555.368q.486.01 1.084-.4q4.086-2.76 4.218-2.789c.063-.014.149-.032.207.02c.059.052.053.15.047.177c-.038.161-1.534 1.552-2.308 2.271q-.344.324-.683.653c-.474.457-.83.8.02 1.36c.861.568 1.73 1.134 2.57 1.733c.414.296.786.56 1.246.519c.267-.025.543-.276.683-1.026c.332-1.77.983-5.608 1.133-7.19a1.8 1.8 0 0 0-.017-.393a.42.42 0 0 0-.142-.27c-.12-.098-.305-.118-.387-.117c-.376.007-.953.207-3.73 1.362" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.tiktok.com/@parkcinema.az?_t=ZS-8u4JT5RcwdE&_r=1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                                        <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='visa'>
                            <img src="https://new.parkcinema.az/icons/Visa.svg" alt="visa" />
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>© Park Cinema, 2025</p>
                    <a target="_blank" href="https://www.esam-innovations.com/">ESAM Innovations</a>
                </div>
            </footer>
        </>
    )
}

export default Layout