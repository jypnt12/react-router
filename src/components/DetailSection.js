import React from 'react'
import home1 from '../img/Adlas_08.jpg'
import { Link } from 'react-router-dom'
//Animations
import { motion } from 'framer-motion';

import {titleAnim, fade, photoAnim, pageAnimation, lineAnim } from "../animation"
import styled from 'styled-components';
import { useScroll } from '../components/useScroll'
const DetailSection = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
  return (
        
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        
        <StyledHome style={{color:'black'}}>
            <Hide>
                <motion.h2 variants={fade}>Provides...</motion.h2>
            </Hide>

            <Description ref={element} variants={fade} animate={controls} initial="hidden">
                <Hide>
                    <motion.h2 variants={fade}><span>Education</span></motion.h2>
                </Hide>
                <Image>
                    <motion.img variants={photoAnim} src={home1} alt='adlas campus'/>
                </Image>
                
            </Description>
            
            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
            <h2>The Racer</h2>
            <motion.div className="line" variants={lineAnim}></motion.div>
            
                <img src={home1} alt=''/>
            
        </Movie>
        </StyledHome>
        
        
    </motion.div>
  )
}
// styled component
// install vscode styled-components extension for styling

const StyledHome = styled.div`
    
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    
    margin: 5vh 20vh;
    color: white;
`;


const Description = styled.div`
    
    display: grid ;
    grid-column: 1;
    /* align-items: center;
    justify-content: space-between; */
    margin: 0vh 20vh;
    /* z-index: 2; */
    /* margin-top: 10vh; */
    h2{
        font-family: 'Oswald', sans-serif;
    }
`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    margin: 0vh 20vh;
    .line{
        height: 0.5rem;
        background: #2326d9;
        margin-bottom: 3rem;

    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    /* padding: 5rem 10rem; */
    /* margin-top: -25vh; */
    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`
const Line = styled(motion.div)`
    height: 0.5rem;
    width: 0%;
    background: #2326d9;
   
`


export default DetailSection