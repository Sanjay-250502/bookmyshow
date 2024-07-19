import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies";
import Home from "./Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Header from './Components/Header'
import Navbar from "./Components/Navbar";
import IndexMovies from "./Components/IndexMovies";
import BookingDetails from "./Components/BookingDetails";
import SeatSelection from "./Components/SeatSelection";
import Payment from "./Components/Payment";
import Footer from "./Components/Footer";




function App() {

  return (
    <>
   

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Navbar" element={<Navbar/>} />
      <Route path="/Header" element={<Header/>}/>
      <Route path="/Movies" element={<Movies/>}/>
      <Route path="/IndexMovies" element={<IndexMovies/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/BookingDetails/:movieTitle/:cardText" element={<BookingDetails/>}/>
      <Route path="/SeatSelection/:movieTitle/:showTime" element={<SeatSelection />} />
      <Route path="/Payment/:movieTitle/:showTime/:selectedSeats" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


