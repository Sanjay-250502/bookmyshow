import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/header.css"
const Header = () => {
  return (
    <>   
        <div className='container-fluid'>
          <h5 className='header-title-js col-lg-12 col-md-12 col-sm-12 col-12'>
            <Link to="/Movies" className='link-tag'>Movies</Link>
          </h5>
        </div>
    </>
  )
}

export default Header;