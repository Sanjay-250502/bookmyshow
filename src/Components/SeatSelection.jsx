// // // import { LuArmchair } from "react-icons/lu";
// // // import React, { useState } from 'react';
// // // import { useNavigate, useParams } from 'react-router-dom';
// // // import "../CSS/seatselect.css";

// // // const SeatSelection = () => {
// // //   const { movieTitle, showTime } = useParams();
// // //   const navigate = useNavigate();
// // //   const [selectedSeats, setSelectedSeats] = useState([]);

// // //   const handleSeatSelection = (seatNumber) => {
   
// // //     if (selectedSeats.includes(seatNumber)) {
// // //       setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
// // //     } else {
// // //       setSelectedSeats([...selectedSeats, seatNumber]);
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     if(selectedSeats.length === 0){
// // //       alert("Please select atleast one seat.");
// // //       return;
// // //     }
// // //     navigate(`/Payment/${encodeURIComponent(movieTitle)}/${encodeURIComponent(showTime)}/${encodeURIComponent(selectedSeats.join(','))}`);

// // //     // navigate(`/Payment/${encodeURIComponent(movieTitle)}/${encodeURIComponent(showTime)}/${selectedSeats.join(',')}`);
// // //   };

// // //   const renderSeatCell = (seatNumber) => {
// // //     return (
// // //       <div
// // //         key={seatNumber}
// // //         className={`seat-cell ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
// // //         onClick={() => handleSeatSelection(seatNumber)}
// // //       >
// // //         <div className="seat-icon"><LuArmchair/>{seatNumber}</div>
// // //       </div>
// // //     );
// // //   };

// // //   const renderRow = (rowIndex) => {
// // //     const seats = [];
// // //     for (let i = 1; i <= 10; i++) {
// // //       const seatNumber = (rowIndex - 1) * 10 + i;
// // //       seats.push(seatNumber);
// // //     }
// // //     return (
// // //       <div key={rowIndex} className="seat-row">
// // //         <div className="row-letter">{String.fromCharCode(64 + rowIndex)}</div>
// // //         {seats.map(seat => renderSeatCell(seat))}
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //     <div className="container mt-3">
// // //      <h1 className="select-seats-title">Select Seats for <span>{movieTitle}</span> </h1>
// // // <h2 className="show-time">Show Time: <span>{showTime}</span></h2>
// // // <button type="button" className="confirm-button" onClick={handleSubmit}>Confirm Seats</button>
// // // </div>
// // //       <div className="seat-selection-container">
// // //         {[...Array(10)].map((_, index) => renderRow(index + 1))}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default SeatSelection;

// // import { LuArmchair } from "react-icons/lu";
// // import React, { useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import "../CSS/seatselect.css";

// // const SeatSelection = () => {
// //   const { movieTitle, showTime } = useParams();
// //   const navigate = useNavigate();
// //   const [selectedSeats, setSelectedSeats] = useState([]);

// //   const handleSeatSelection = (seatNumber) => {
   
// //     if (selectedSeats.includes(seatNumber)) {
// //       setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
// //     } else {
// //       setSelectedSeats([...selectedSeats, seatNumber]);
// //     }
// //   };

// //   const handleSubmit = () => {
// //     if(selectedSeats.length === 0){
// //       alert("Please select atleast one seat.");
// //       return;
// //     }
// //     navigate(`/Payment/${encodeURIComponent(movieTitle)}/${encodeURIComponent(showTime)}/${encodeURIComponent(selectedSeats.join(','))}`);
// //   };

// //   const renderSeatCell = (seatNumber) => {
// //     return (
// //       <div
// //         key={seatNumber}
// //         className={`seat-cell ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
// //         onClick={() => handleSeatSelection(seatNumber)}
// //       >
// //         <div className="seat-icon"><LuArmchair/>{seatNumber}</div>
// //       </div>
// //     );
// //   };

// //   const renderRow = (rowIndex) => {
// //     const seats = [];
// //     for (let i = 1; i <= 10; i++) {
// //       const seatNumber = (rowIndex - 1) * 10 + i;
// //       seats.push(seatNumber);
// //     }
// //     return (
// //       <div key={rowIndex} className="seat-row">
// //         <div className="row-letter">{String.fromCharCode(64 + rowIndex)}</div>
// //         {seats.map(seat => renderSeatCell(seat))}
// //       </div>
// //     );
// //   };

// //   return (
// //     <>
// //       <div className="container mt-3">
// //         <h1 className="select-seats-title">Select Seats for <span>{movieTitle}</span> </h1>
// //         <h2 className="show-time">Show Time: <span>{showTime}</span></h2>
// //         <button type="button" className="confirm-button" onClick={handleSubmit}>Make Payment</button>
// //       </div>
// //       <div className="seat-selection-container">
// //         {[...Array(10)].map((_, index) => renderRow(index + 1))}
// //       </div>
// //     </>
// //   );
// // };

// // export default SeatSelection;


// import { LuArmchair } from "react-icons/lu";
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import "../CSS/seatselect.css";

// const SeatSelection = () => {
//   const { movieTitle, showTime } = useParams();
//   const navigate = useNavigate();
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatSelection = (seatNumber) => {
//     if (selectedSeats.includes(seatNumber)) {
//       setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
//     } else {
//       setSelectedSeats([...selectedSeats, seatNumber]);
//     }
//   };

//   const handleSubmit = () => {
//     if (selectedSeats.length === 0) {
//       alert("Please select at least one seat.");
//       return;
//     }
//     navigate(`/Payment/${encodeURIComponent(movieTitle)}/${encodeURIComponent(showTime)}/${encodeURIComponent(selectedSeats.join(','))}`);
//   };

//   const renderSeatCell = (seatNumber) => {
//     return (
//       <div
//         key={seatNumber}
//         className={`seat-cell ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
//         onClick={() => handleSeatSelection(seatNumber)}
//       >
//         <div className="seat-icon"><LuArmchair />{seatNumber}</div>
//       </div>
//     );
//   };

//   const renderRow = (rowIndex) => {
//     const seats = [];
//     for (let i = 1; i <= 10; i++) {
//       const seatNumber = (rowIndex - 1) * 10 + i;
//       seats.push(seatNumber);
//     }
//     return (
//       <div key={rowIndex} className="seat-row">
//         <div className="row-letter">{String.fromCharCode(64 + rowIndex)}</div>
//         {seats.map(seat => renderSeatCell(seat))}
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="container mt-3">
//         <h1 className="select-seats-title">Select Seats for <span>{movieTitle}</span> </h1>
//         <h2 className="show-time">Show Time: <span>{showTime}</span></h2>
//         <button type="button" className="confirm-button" onClick={handleSubmit}>Make Payment</button>
//       </div>
//       <div className="seat-selection-container">
//         {[...Array(10)].map((_, index) => renderRow(index + 1))}
//       </div>
//     </>
//   );
// };

// export default SeatSelection;

import { LuArmchair } from "react-icons/lu";
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../CSS/seatselect.css";
import Footer from "./Footer";

const SeatSelection = () => {
  const { movieTitle, showTime } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleSubmit = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    navigate(`/Payment/${encodeURIComponent(movieTitle)}/${encodeURIComponent(showTime)}/${encodeURIComponent(selectedSeats.join(','))}`);
  };

  const renderSeatCell = (seatNumber) => {
    return (
      <div
        key={seatNumber}
        className={`seat-cell ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
        onClick={() => handleSeatSelection(seatNumber)}
      >
        <div className="seat-icon"><LuArmchair />{seatNumber}</div>
      </div>
    );
  };

  const renderRow = (rowIndex) => {
    const seats = [];
    for (let i = 1; i <= 10; i++) {
      const seatNumber = (rowIndex - 1) * 10 + i;
      seats.push(seatNumber);
    }
    return (
      <div key={rowIndex} className="seat-row">
        <div className="row-letter">{String.fromCharCode(64 + rowIndex)}</div>
        {seats.map(seat => renderSeatCell(seat))}
      </div>
    );
  };

  return (
    <>
      <div className="container mt-3">
        <h1 className="select-seats-title">Select Seats for <span>{movieTitle}</span> </h1>
        <h2 className="show-time">Show Time: <span>{showTime}</span></h2>
        <button type="button" className="confirm-button" onClick={handleSubmit}>Make Payment</button>
      </div>
      <div className="seat-selection-container">
        {[...Array(10)].map((_, index) => renderRow(index + 1))}
      </div>
      <Footer/>
    </>
  );
};

export default SeatSelection;
