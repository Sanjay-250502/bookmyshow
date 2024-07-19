

import { useNavigate, useParams } from "react-router-dom";
import "../CSS/BookingDetails.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


const BookingDetails = () => {
  const { movieTitle,cardText } = useParams();
  const navigation = useNavigate()
  const handleShowTimeClick = (showTime) => {
    navigation(`/SeatSelection/${encodeURIComponent(movieTitle)}/${encodeURIComponent(showTime)}`);
  }
  return (
   <>
   <Navbar/>
   <Header/>
   <div className="booking-details-container container">
   <h4 className="booking-details-header">Booking Details</h4>
   <h1 className="movie-title">{movieTitle}</h1>
   <div className="theatre-info">
   <h3 className="card-booking-text">{cardText}</h3>
        <h5 className="theatre-list">Sri Karthikai Theatre A/C 3D 4K HD 11.1DTS, <span>Nagercoil</span></h5>
        <ul className="d-flex show-time-list">
          <li>
           <button onClick={() => handleShowTimeClick("10:00 AM")}>10:00 AM</button> 
          </li>
          <li>
          <button onClick={() => handleShowTimeClick("2:00 PM")}>2:00 PM</button>
          </li>
          <li>
           <button onClick={() => handleShowTimeClick("6:00 PM")}>6:00 PM</button> 
          </li>
        </ul>
       
         <h5 className="theatre-list">Kavalkinaru Chakravarthy Cinemas A/C 4K Screen</h5>
         <ul className="d-flex show-time-list">
         <li>
           <button onClick={() => handleShowTimeClick("10:00 AM")}>10:00 AM</button> 
          </li>
          <li>
          <button onClick={() => handleShowTimeClick("2:00 PM")}>2:00 PM</button>
          </li>
          <li>
           <button onClick={() => handleShowTimeClick("6:00 PM")}>6:00 PM</button> 
          </li>
        </ul>
        
         <h5 className="theatre-list">Rajesh Theatre A/C 4k Screen 7.1 Dolby Audio, <span>Nagercoil</span></h5>
         <ul className="d-flex show-time-list">
         <li>
           <button onClick={() => handleShowTimeClick("10:00 AM")}>10:00 AM</button> 
          </li>
          <li>
          <button onClick={() => handleShowTimeClick("2:00 PM")}>2:00 PM</button>
          </li>
          <li>
           <button onClick={() => handleShowTimeClick("6:00 PM")}>6:00 PM</button> 
          </li>
        </ul>
   </div>
</div>
<Footer/>
   </>
  );
};

export default BookingDetails;



