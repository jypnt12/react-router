import React from 'react'
import home1 from '../img/Adlas_08.jpg'
import gtown from '../img/gtown.jpg'
import play from '../img/pix22.jpg'
import { Link } from 'react-router-dom'
//Animations
import { motion } from 'framer-motion';

import {titleAnim, fade, photoAnim, pageAnimation, lineAnim } from "../animation"
import styled from 'styled-components';
import { useScroll } from '../components/useScroll'
const Impact = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
  return (
        
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        
        <StyledHome style={{color:'black'}}>
            <Hide>
                <motion.h4 variants={fade}>IMPACT</motion.h4>
            </Hide>
        <Card>
            <Cards ref={element} variants={fade} animate={controls} initial="hidden">
                <motion.h2 variants={fade}><span>Spiritual</span></motion.h2>
                <img src={gtown} alt=''/>
            </Cards>
            
            <Cards ref={element2} variants={fade} animate={controls2} initial="hidden">
                
                    <motion.h2 variants={fade}><span>Academics</span></motion.h2>
              
                
                <img src={home1} alt=''/>
            </Cards>
            <Cards ref={element3} variants={fade} animate={controls3} initial="hidden">
                
                    <motion.h2 variants={fade}><span>Personal</span></motion.h2>
                
                
                <img src={play} alt=''/>
            </Cards>
        </Card>
        </StyledHome>
        
        
    </motion.div>
  )
}
// styled component
// install vscode styled-components extension for styling

const StyledHome = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 110vh 10vh 5vh 10vh;
    color: white;
    h2{
        font-family: 'Oswald', sans-serif;
    }
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
const Card = styled(motion.div)`
    padding-bottom: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    .line{
        height: 0.5rem;
        background:  #336699;
        margin-bottom: 3rem;

    }
    
`

    

const Cards =styled.div`
    flex-basis: 25rem;
    height: 60vh;
    background:#ccc ;
    margin-top: 5rem;
    h2{
        display: flex;
        align-items: center;
        z-index: 3;
        /* opacity: 1; */
        /* h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        } */
    }
    img{
        
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }

`

const Hide = styled.div`
    overflow: hidden;
    
`



export default Impact