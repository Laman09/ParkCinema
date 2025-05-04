import React, { useEffect, useState } from 'react';
import "./Home.css"

const Home = () => {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonfakery.com/movies/paginated")
  //     .then(response => response.json())
  //     .then(data => {
  //       setMovies(data.results || []);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching movies:", error);
  //     });
  // }, []);

  // const backgroundImages = [
  //   "url(https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744886126249_1744886126249_minecraft__sayt_banner.png&w=3840&q=75)",
  //   "url('https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744885620693_1744885620693_belkede_sayt_banner.png&w=3840&q=75')",
  //   "url('https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744884456470_1744884456469_tagiyev__sayt_banner.png&w=3840&q=75')",
  //   "url('https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1744883815570_1744883815569_wolt_post_sayt_banner.png&w=3840&q=75')",
  // ];

  return (
    // <div className="backgroundImages">
    //   <div className="images">
    //     <div className="image"></div>
    //     <div className="image"></div>
    //     <div className="image"></div>
    //     <div className="image"></div>
    //   </div>
    //   <div className="button"></div>
    // </div>
    <section className="list">
      <div className="headings">
        <ul id='movies'>
          <li><a href="/az">Siyahı</a></li>
          <li><a href="/az/trailers">Treylerlər</a></li>
        </ul>
        <ul id='schedule'>
          <li>Hamısı</li>
          <li>Tezliklə</li>
          <li>Cədvəl</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;