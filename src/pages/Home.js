import React from 'react'
import home1 from '../img/virginofthepoor.jpg'
//Animations
import { motion } from 'framer-motion';

import {titleAnim, fade, photoAnim, pageAnimation, lineAnim } from "../animation"
import styled from 'styled-components';
import DetailSection from '../components/DetailSection';

const Home = () => {
  return (
    
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <StyledHome>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 variants={titleAnim}>The Sisters of Mary School - Adlas</motion.h2>
                        <Line transition={{duration:0.75, when: "beforeChildren", staggerChildren: 0.25,}} 
                            initial={{width:"0%"}} 
                            animate={{width:"100%"}}/>
                    </Hide>
                </motion.div>
                {/* <motion.button variants={fade}>Contact us</motion.button> */}
            </Description>
        </StyledHome>
        <Image>
            <motion.img variants={photoAnim} src={home1} alt='guy with the camera'/>
        </Image>
        <DetailSection/>
    </motion.div>
  )
}
// styled component
// install vscode styled-components extension for styling

const StyledHome = styled.div`
    /* min-height: 90vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between;
    padding: 5rem 10rem; */
    color: white;
`;

const Description = styled.div`
    /* flex: 1; */
    
    /* display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; */
    /* padding-right: 5rem; */
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
    /* position: absolute; */
    /* bottom: -80%;
    left: 60%; */
`

export default Home