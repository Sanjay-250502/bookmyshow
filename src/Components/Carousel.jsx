import React, { useState, useEffect } from 'react'
import carouselImage from '../carouselImage.json'
// import { CiUser } from "react-icons/ci";
import { LuChevronLeftCircle } from "react-icons/lu";
import { LuChevronRightCircle } from "react-icons/lu";
import "../CSS/carousel.css"
const Carousel = () => {
    const [images] = useState(carouselImage.images)
    // console.log(images)

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    const prevSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [current]);
  return (
    <>
    <div className='container-fluid mt-3'>
        <div className='slider'>
            <div className='left-arrow' onClick={prevSlide}>
                <LuChevronLeftCircle />
            </div>
            <div className='right-arrow' onClick={nextSlide}>
                <LuChevronRightCircle />
            </div>
            <div className='slide'>
                <img src={Object.values(images[current])[0]} alt='images'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carousel