// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Header from "./Header";
// import "../CSS/indexMovies.css";
// import { IoMdPlayCircle } from "react-icons/io";
// import { useLocation } from "react-router-dom";
// const IndexMovies = () => {
//   const [mainMovie, setMainMovie] = useState([]);
//   const location = useLocation();
//   const view = location.state;
  

//   const fetchClickMovie = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/movieclicked");
//       const responseData = response.data;
//       setMainMovie(responseData);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   console.log(mainMovie);
//   useEffect(() => {
//     fetchClickMovie();
//   }, []);
//   const filteredMovie = mainMovie.filter((movie) => movie.title === view);
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <div className="container mt-3">
//         <h1 style={{ textAlign: "center" }}>Movies</h1>
//         {filteredMovie.map((movieCards, index) => (
//           <div key={index} className="movieCards">
//             <div className="card bg-dark text-white total-card col-lg-12 col-md-12 col-sm-12 col-12">
//               <img
//                 src={movieCards.backgroundimage}
//                 className="card-img main-bg-img"
//                 alt="..."
//               />
//               <div className="card-body-image">
//                 <button className="trailer-button">
//                   <IoMdPlayCircle className="play-icon" />
//                   <a href={movieCards.trailer} target="blank">
//                     Trailer
//                   </a>
//                 </button>
//                 <img
//                   src={movieCards.cardimage}
//                   className="card-img-top cardimage-card"
//                   alt={movieCards.title}
//                 />
//                 <div className="card-body">
//                   <h1 className="card-title move-tit">{movieCards.title}</h1>
//                   <div className="button-main-par">
//                     <button className="lang-but">{movieCards.language}</button>
//                     <button className="d-but">{movieCards.dimension}</button>
//                   </div>
//                   <h3 className="card-text">{movieCards.cardtext}</h3>
//                   <button className="btn btn-danger book-btn">Book</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default IndexMovies;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
// import Header from "./Header";
import "../CSS/indexMovies.css";
import { IoMdPlayCircle } from "react-icons/io";
import {  useLocation, useNavigate } from "react-router-dom";

const IndexMovies = () => {
  const [mainMovie, setMainMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const location = useLocation();
  const view = location.state;
  const navigation = useNavigate()

  const fetchClickMovie = async () => {
    try {
      const response = await axios.get("http://localhost:3001/movieclicked");
      const responseData = response.data;
      setMainMovie(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchClickMovie();
  }, []);

  const filteredMovie = mainMovie.filter((movie) => movie.title === view);


  const handleBookButtonClick = (movieTitle,cardtext) => {
    setSelectedMovie(movieTitle,cardtext);
    navigation(`/BookingDetails/${encodeURIComponent(movieTitle)}/${encodeURIComponent(cardtext)}`)
  };
  console.log(selectedMovie)

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h1 style={{ textAlign: "center" }}>Movies</h1>
        {filteredMovie.map((movieCards, index) => (
          <div key={index} className="movieCards">
            <div className="card bg-dark text-white total-card col-lg-12 col-md-12 col-sm-12 col-12">
              <img
                src={movieCards.backgroundimage}
                className="card-img main-bg-img"
                alt="..."
              />
              <div className="card-body-image">
                <button className="trailer-button">
                  <IoMdPlayCircle className="play-icon" />
                  <a href={movieCards.trailer} target="_blank" rel="noopener noreferrer">
                    Trailer
                  </a>
                </button>
                <img
                  src={movieCards.cardimage}
                  className="card-img-top cardimage-card"
                  alt={movieCards.title}
                />
                <div className="card-body">
                  <h1 className="card-title move-tit">{movieCards.title}</h1>
                  <div className="button-main-par">
                    <button className="lang-but">{movieCards.language}</button>
                    <button className="d-but">{movieCards.dimension}</button>
                  </div>
                  <h3 className="card-text">{movieCards.cardtext}</h3>
                  <button
                    className="btn btn-danger book-btn"
                    onClick={() => handleBookButtonClick(movieCards.title,movieCards.cardtext)} // Pass movie title to the handler
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexMovies;

