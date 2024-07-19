// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import "../CSS/RecommendedMovies.css"
// import { useNavigate } from 'react-router-dom'

// const RecommendedMovies = () => {
//   const navigation = useNavigate()
//   const [movieData,setMovieData] = useState([])

//   const fetchData = async () => {
//     try{
//       const response = await axios.get("http://localhost:3001/recmovies")
//       const responseData = response.data
//       setMovieData(responseData)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//   useEffect(()=>{
//     fetchData()
//   },[])
//   const handleMovieNext = (title) => {
//      navigation("/IndexMovies" ,{state:title})
//   }
//   return (
//     <>
//     <div className='container' >
//     <div className='row mt-5'>
//     <h1>Latest Releases</h1>
//   {movieData.map((movie,index)=>(
//      <div key={index} className="card-group col-lg-4 col-md-4 col-sm-12 col-12">
//      <div className="card card-1" onClick={()=>handleMovieNext(movie.title)}>
//          <img src={process.env.PUBLIC_URL + movie.image} alt={movie.title} className='image-all'/>
//        <div className="card-body">
//          <h2 className="card-title">{movie.title}</h2>
//          <h4 className="card-text"><small className="text-muted">{movie.cardtext}</small></h4>
//          <h4 className="card-text"><small className="text-muted">{movie.language}</small></h4>
//          <button className='btn btn-danger book-btn'>Book</button>
//        </div>
//      </div>
//    </div>
//   ))}
//   </div>
//     </div>
//     </>
//   )
// }

// export default RecommendedMovies




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../CSS/RecommendedMovies.css"
const RecommendedMovies = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigate()
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recmovies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Filter movies based on search term
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleMovieNext = (title) => {
     navigation("/IndexMovies" ,{state:title})
  }
  return (
    <div className='container' >
    <div className='row mt-5'>
      <h2>Recommended Movies</h2>
      
        {filteredMovies.length > 0 ? 
        (
          filteredMovies.map((movie,index)=>(
            <div key={index} className="card-group col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="card card-1" onClick={()=>handleMovieNext(movie.title)}>
                <img src={process.env.PUBLIC_URL + movie.image} alt={movie.title} className='image-all'/>
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <h4 className="card-text"><small className="text-muted">{movie.cardtext}</small></h4>
                <h4 className="card-text"><small className="text-muted">{movie.language}</small></h4>
                <button className='btn btn-danger book-btn'>Book</button>
              </div>
            </div>
          </div>
          ))
        ) 
        : 
        (
          <p>No movies found.</p>
        )}
      
    </div>
    </div>
  );
};

export default RecommendedMovies;
