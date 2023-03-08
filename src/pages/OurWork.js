import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//images

import home1 from '../img/Adlas_08.jpg'
import gtown from '../img/gtown.jpg'
import play from '../img/pix22.jpg'
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from "../animation"
import { useScroll } from '../components/useScroll'
import DetailSection from '../components/DetailSection'


const Ourwork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    
    const [element3, controls3] = useScroll();
  return (
    <Work style={{background:"#fff"}} exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        </motion.div>
        {/* <Movie>
            <motion.h2 variants={fade}>The Athlete</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/the-athlete">
                <Hide>
                    <motion.img variants={photoAnim} src={athlete} alt='athlete'/>
                </Hide>
            </Link>
        </Movie>
        <Movie ref={element} variants={fade} animate={controls} initial="hidden">
            <h2>The Racer</h2>
            <motion.div className="line" variants={lineAnim}></motion.div>
            <Link  to="/work/the-racer">
                <img src={theracer} alt='theracer'/>
            </Link>
        </Movie>
        <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
            <h2>Good Times</h2>
            <motion.div className="line" variants={lineAnim}></motion.div>
            <Link  to="/work/good-times">
                <img src={goodtimes} alt='goodtimes'/>
            </Link>
        </Movie> */}
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>

            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <Hide>
                    <motion.h2 variants={fade}><span>EDUCATION</span></motion.h2>
                </Hide>
                <motion.div className="line" variants={lineAnim}></motion.div>
                
                    <img src={gtown} alt=''/>
              
            </Movie>
            
            <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <Hide>
                    <motion.h2 variants={fade}><span>HOME</span></motion.h2>
                </Hide>
                <motion.div className="line" variants={lineAnim}></motion.div>
                <img src={home1} alt=''/>
            </Movie>
            <Movie ref={element3} variants={fade} animate={controls3} initial="hidden">
                <Hide>
                    <motion.h2 variants={fade}><span>EXPERIENCE TO REMEMBER</span></motion.h2>
                </Hide>
                <motion.div className="line" variants={lineAnim}></motion.div>
                <img src={play} alt=''/>
            </Movie>
    </motion.div>
    

    </Work>
  )
};

const Work=styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 3rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.2rem;
        background: #336699;
        margin-bottom: 3rem;
        margin-top: -1rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Hide= styled.div`
    overflow: hidden;
`
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: -10%;
    width: 100%;
    height: 120vh;
    background:#01243B ;
    z-index: 3;
`
const Frame2 = styled(Frame1)`
    background: #336699;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background:  #5288DB;
`


export default Ourwork