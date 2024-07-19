import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Carousel from './Components/Carousel';
import RecommendedMovies from "./Components/RecommendedMovies";
import Footer from './Components/Footer';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Header />
      <Carousel />
      <RecommendedMovies searchTerm={searchTerm} />
      <Footer/>
    </>
  );
};

export default Home;
