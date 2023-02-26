import React from 'react'
import home1 from '../img/virginofthepoor.jpg'
//Animations
import { motion } from 'framer-motion';

import {titleAnim, fade, photoAnim, pageAnimation, lineAnim } from "../animation"
import styled from 'styled-components';

const DetailSection = () => {
  return (
        
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <Hide>
        <StyledHome style={{color:'black'}}>
            <motion.h2 variants={fade}>Provides...</motion.h2>
        </StyledHome>
        </Hide>
    </motion.div>
  )
}
// styled component
// install vscode styled-components extension for styling

const StyledHome = styled.div`
    
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    margin: 10vh 20vh;
    color: white;
`;

const Description = styled.div`
    
    z-index: 2;
    margin-top: 10vh;
    h2{
        font-family: 'PT Serif', serif;
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    filter: brightness(50%);
    margin-top: -25vh;
    
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