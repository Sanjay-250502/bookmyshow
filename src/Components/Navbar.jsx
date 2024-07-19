// import { Link } from 'react-router-dom';
// import { IoIosSearch } from "react-icons/io";
// import booking from '../bookmyshow.png';
// import "../App.css";


//   const Navbar = () => {
//   return (
//     <div className='container-fluid'>
//     <nav className="navbar tot-par navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href='https://in.bookmyshow.com/explore/home/nagercoil'>
//           <img src={booking} alt='bookmyshow' className='book-my-show-img' />
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <form className="d-flex w-75 h-100">
//             <div className="input-group">
//               <span className="input-group-text"><IoIosSearch className='search-icon'/></span>
//               <input type="text" className="form-control"  placeholder="Search for Movies..."  aria-label="Search" aria-describedby="basic-addon1"/>
//             </div>  
//           </form>
//           <div className="dropdown mt-2" style={{marginLeft:"20px"}}>
//             <a className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
//               Nagercoil
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//               <li><a className="dropdown-item" >Nagercoil</a></li>
//               <li><a className="dropdown-item">Tirunelveli</a></li>
//               <li><a className="dropdown-item" >Madurai</a></li>
//             </ul>
//           </div>
//           <div className=" align-items-center">
//             <button type="button" className="logout-button-mainpage">
//               <Link to="/" style={{ textDecoration: "none" }} className='logout'>LogOut</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//     </div>
//   );
// };

// export default Navbar;

import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import booking from '../bookmyshow.png';
import "../App.css";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(search);
  };

  return (
    <div className='container-fluid'>
      <nav className="navbar tot-par navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href='https://in.bookmyshow.com/explore/home/nagercoil'>
            <img src={booking} alt='bookmyshow' className='book-my-show-img' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex w-75 h-100">
              <div className="input-group">
                <span className="input-group-text">
                  <IoIosSearch className='search-icon' onClick={handleSearchClick}/>
                </span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search for Movies..." 
                  aria-label="Search" 
                  aria-describedby="basic-addon1"
                  value={search}
                  onChange={handleSearchChange}
                />
                {/* <button type="button" className="btn btn-primary" >
                  Search
                </button> */}
              </div>
            </form>
            <div className="dropdown mt-2" style={{marginLeft:"20px"}}>
              <a className="dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                Nagercoil
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item">Nagercoil</a></li>
                <li><a className="dropdown-item">Tirunelveli</a></li>
                <li><a className="dropdown-item">Madurai</a></li>
              </ul>
            </div>
            <div className=" align-items-center">
              <button type="button" className="logout-button-mainpage">
                <Link to="/" style={{ textDecoration: "none" }} className='logout'>LogOut</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
