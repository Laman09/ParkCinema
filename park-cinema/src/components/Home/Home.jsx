import React, { useEffect, useState } from 'react'

const Home = () => {
  const [movies, setMovies] = useState([]);
  fetch("https://jsonfakery.com/movies/paginated")
  .then(response => response.json())
  .then(data => console.log(data.data[2].original_title))
  useEffect(() => {
    
    //   .then(data => setMovies(data.data.slice(0, 5)))
  }, []);
  

//   return (
//     <div className='d-flex flex-wrap align-items-center justify-content-center'>
//       {movies.map((movie) => (
//         <div key={movie.id} className='border border-5 border-white p-2 m-2 rounded-3'>
//           {movie.photoUrls && movie.photoUrls.length > 0 && (
//             <img 
//               width={300} 
//               src={"https://jsonfakery.com/movies/paginated"} 
//               alt={movie.name} 
//               className='object-cover rounded-3'
//             />
//           )}
//           <h3>{movie.name}</h3>
//         </div>
//       ))}
//     </div>
//   )
}

export default Home;