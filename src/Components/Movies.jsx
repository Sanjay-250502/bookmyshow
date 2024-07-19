
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import Navbar from "./Navbar";

// const Movies = () => {
//   const navigation = useNavigate();
//   const [movieList, setMovieList] = useState([]);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/moviedetail");
//         setMovieList(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchMovie();
//   }, []);

//   const handleMoveNext = (title) => {
//     navigation("/IndexMovies", { state: title });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='container'>
//         <div className='row mt-2'>
//           <h1 style={{ textAlign: "center" }}>Movies</h1>
//           {movieList.map((movie, index) => (
//             <div key={index} className="card-group col-lg-4 col-md-4 col-sm-12 col-12">
//               <div className="card card-1" onClick={() => handleMoveNext(movie.title)}>
//                 <img src={process.env.PUBLIC_URL + movie.image} alt={movie.title} className='image-all' />
//                 <div className="card-body">
//                   <h2 className="card-title">{movie.title}</h2>
//                   <h4 className="card-text"><small className="text-muted">{movie.cardtext}</small></h4>
//                   <h4 className="card-text"><small className="text-muted">{movie.language}</small></h4>
//                   <button className='btn btn-danger book-btn'>Book</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Movies;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const Movies = () => {
  const navigation = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get("http://localhost:3001/moviedetail");
        setMovieList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  const handleMoveNext = (title) => {
    navigation("/IndexMovies", { state: title });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredMovies = movieList.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className='container'>
        <div className='row mt-2'>
          <h1 style={{ textAlign: "center" }}>Movies</h1>
          {filteredMovies.map((movie, index) => (
            <div key={index} className="card-group col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="card card-1" onClick={() => handleMoveNext(movie.title)}>
                <img src={process.env.PUBLIC_URL + movie.image} alt={movie.title} className='image-all' />
                <div className="card-body">
                  <h2 className="card-title">{movie.title}</h2>
                  <h4 className="card-text"><small className="text-muted">{movie.cardtext}</small></h4>
                  <h4 className="card-text"><small className="text-muted">{movie.language}</small></h4>
                  <button className='btn btn-danger book-btn'>Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;

