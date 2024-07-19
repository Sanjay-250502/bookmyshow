import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "../CSS/payment.css"; 

const Payment = () => {
  const { movieTitle, showTime, selectedSeats } = useParams();
  const navigate = useNavigate();

  const seatsArray = selectedSeats ? selectedSeats.split(',').map(seat => seat.trim()) : [];
  const qrValue = `Movie Name:${movieTitle} - Movie Show:${showTime} - Seats: ${seatsArray.join(', ')}`;

  const handleBookTicket = () => {
    alert(`Tickets booked for ${decodeURIComponent(movieTitle)} at ${decodeURIComponent(showTime)} for seats: ${seatsArray.join(', ')}`);
    generateReceipt();
    navigate('/home');
  };

  const generateReceipt = () => {
    const input = document.getElementById('receipt');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("receipt.pdf");
    });
  };

  return (
    <div id="receipt" className="payment-container">
      <h1 className="payment-title">Payment for {decodeURIComponent(movieTitle)}</h1>
      <h2 className="payment-show-time">Show Time: {decodeURIComponent(showTime)}</h2>
      <h3 className="payment-seats">Selected Seats: {seatsArray.join(', ')}</h3>
      <h3 className="payment-total-seats">Total Seats: {seatsArray.length}</h3>
      <div className="qr-code">
        <QRCode value={qrValue} />
      </div>
      <button className="book-ticket-button" onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
};

export default Payment;
