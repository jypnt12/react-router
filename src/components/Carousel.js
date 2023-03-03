import React, { useState, useEffect } from 'react'
import home1 from '../img/virginofthepoor.jpg'
import adlas from '../img/adlas03.jpg'
import classPic from '../img/class2019a.jpg'
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
// import {slide} from '../animation'
import { FiChevronRight,FiChevronLeft, FiArrowDown  } from "react-icons/fi";
import {titleAnim, fade, photoAnim, pageAnimation, lineAnim } from "../animation"

const Carousel = () => {
    
    const imageArray = [adlas, home1, classPic];
    const [direction, setDirection] = useState(0);

    const [index, setIndex] = useState(0);

    const nextStep=()=>{
       
        setDirection(-1)
       if(index===imageArray.length - 1){
        setIndex(0)
        return
       }
       setIndex(index+1)
    }
    const prevStep=()=>{
        
        setDirection(1)
        if(index===0){
            setIndex(imageArray.length - 1)
            return
        }
        setIndex(index-1)
    }

        // setInterval(()=>{
        //     nextStep()
        // },5000)
    
        const slide = {
    
            initial: direction=>{
                return{
                x: direction > 0 ? 200 : -200,
                opacity: 0,
                // scale:0.5,
                }
            },
            animate:{
                x:0,
                opacity:1,
                // transition:'ease-in',
                // scale:1,
                transition: {ease: "easeOut", duration: 1},
            },
            exit: direction=>{
                return{
                    x: direction > 0 ? -200 : 200,
                opacity: 0,
                // transition:'ease-in' ,
                transition: {ease: "easeOut", duration: 1},
                // scale:0.5,
                }
            },
        }
  return (
    <Container className="container">
        <Slideshow className="slideshow" >
            <AnimatePresence initial={false} custom={direction}>
                <motion.img 
                variants = {slide } 
                animate="animate"
                initial="initial"
                exit="exit"
                key={imageArray[index]}
                custom={direction}
                src={imageArray[index]} alt='' 
                className="slides"/>
            </AnimatePresence>
            <button className='prevButton' onClick={prevStep}><FiChevronLeft/> </button>
            <button className='nextButton' onClick={nextStep}><FiChevronRight/></button>
            
        </Slideshow>
        <div>
        <FiArrowDown/>
        </div>
        
    </Container>
  )
}



const Container = styled.div`
    display: flex;
    /* height: 80vh; */
    /* position: relative; */
`
const Slideshow = styled.div`

   
    width: 100%;
    height: 90vh;
    aspect-ratio: calc(16/9);
    position: absolute; 
    overflow: hidden;
    
    button{
        padding: 16px;
        font-size: 25px;
        width: 64px;
        border-radius: 32px;
        aspect-ratio: 1;
        border: none;
        cursor: pointer;
        text-align: center;
        color: white;
       
        
    }
    button:hover{
        background-color: #ccc;
        
        
    }
    .prevButton{
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
    }
    .nextButton{
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
    }
    .slides{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`


export default Carousel