import React from 'react'
import home1 from '../img/virginofthepoor.jpg'
import adlas from '../img/adlas03.jpg'
import classPic from '../img/class2019a.jpg'
import { motion } from 'framer-motion';
import styled from 'styled-components';
const Carousel = () => {

    const imageArray = ['adlas', 'home1', 'classPic'];

  return (
    <div className="container">
        <div className="slideshow">
            <img src={imageArray[0]} alt='' className="slides">
                <button className='prevButton'> </button>
                <button className='nextButton'> </button>
            </img>
        </div>
    </div>
  )
}

export default Carousel