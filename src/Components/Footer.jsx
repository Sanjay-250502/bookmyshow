import React from 'react';
import '../CSS/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text cot" href="../Home.jsx">BookMyShow</h1>
          <p>
            BookMyShow is India's largest entertainment platform and movie
            ticketing destination.
          </p>
          <div className="contact">
            <span>Contact Us</span><br/>
            <span>support@bookmyshow.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2 className='cot'>Quick Links</h2>
          <ul>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Plays</a></li>
            <li><a href="#">Sports</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2 className='cot'>Contact Us</h2>
          <form>
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
      
        &copy; 2024 BookMyShow. All rights reserved. Designed By -Sanjay❤️❤️
        <dl>
            <dd></dd>
        </dl>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react';
// import '../CSS/footer.css'; 
// import emailjs from 'emailjs-com';
// import { useState } from 'react';
// const Footer = () => {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!email || !message) {
//             alert('Please enter your email and message.');
//             return;
//           }
      
//           emailjs.sendForm('service_ct0c6qc', 'template_jgaghuk', e.target, 'sanjay29746')
//             .then((response) => {
//               console.log('Email sent successfully:', response);
//               alert('Message sent successfully!');
//               // Clear form fields after successful submission
//               setEmail('');
//               setMessage('');
//             })
//             .catch((error) => {
//               console.error('Error sending email:', error);
//               alert('Failed to send message. Please try again later.');
//             });
//       }
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h1 className="logo-text cot" href="../Home.jsx">BookMyShow</h1>
//           <p>
//             BookMyShow is India's largest entertainment platform and movie
//             ticketing destination.
//           </p>
//           <div className="contact">
//             <span>Contact Us</span><br/>
//             <span>support@bookmyshow.com</span>
//           </div>
//           <div className="socials">
//             <a href="#"><i className="fab fa-facebook"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//             <a href="#"><i className="fab fa-instagram"></i></a>
//           </div>
//         </div>
//         <div className="footer-section links">
//           <h2 className='cot'>Quick Links</h2>
//           <ul>
//             <li><a href="#">Movies</a></li>
//             <li><a href="#">Events</a></li>
//             <li><a href="#">Plays</a></li>
//             <li><a href="#">Sports</a></li>
//           </ul>
//         </div>
//         <div className="footer-section contact-form">
//           <h2 className='cot'>Contact Us</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="email" name="email" 
//               className="text-input contact-input" 
//               placeholder="Your email address" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required 
//             />
//             <textarea rows="4" name="message" 
//               className="text-input contact-input" 
//               placeholder="Your message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required>
//             </textarea>
//             <button type="submit" className="btn btn-primary" >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="footer-bottom">
      
//         &copy; 2024 BookMyShow. All rights reserved. Designed By -Sanjay❤️❤️
//         <dl>
//             <dd></dd>
//         </dl>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

  

   