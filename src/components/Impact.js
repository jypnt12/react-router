import React from 'react'
import room from '../img/SMS-01.webp'
import mass from '../img/mass.jpg'
import gardening from '../img/SMS-06.jpg'
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
        
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show' >
        
        <StyledHome style={{color:'black'}}>
            <Hide>
                <motion.h4 variants={fade}>OUR IMPACT</motion.h4>
                <motion.div className="line" ></motion.div>
            </Hide>
        <Card>
            <Cards ref={element} variants={fade} animate={controls} initial="hidden" whileHover={{ scale: 1.1 }} transition={{  stiffness: 400, damping: 10 }}>
            <Link to='/spiritual'>
                <motion.img src={mass} alt=''/>
            </Link>
                
                <motion.h2 variants={fade}><span>Spiritual</span></motion.h2>
                
            </Cards>
            
            <Cards ref={element2} variants={fade} animate={controls2} initial="hidden" whileHover={{ scale: 1.1 }} transition={{  stiffness: 400, damping: 10 }}>
            <Link to='/academics'>
                <motion.img src={room} alt='' />
            </Link>
                <motion.h2 variants={fade}><span>Academics</span></motion.h2>
              
                
                
            </Cards>
            <Cards ref={element3} variants={fade} animate={controls3} initial="hidden" whileHover={{ scale: 1.1 }} transition={{  stiffness: 400, damping: 10 }}>
            <Link to='/personal'>
                <motion.img src={gardening} alt=''/>
            </Link>
                <motion.h2 ><span>Personal</span></motion.h2>
               
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

    margin: 100vh 10vh 5vh 10vh;
    color: white;
    h2{
        font-family: 'Oswald', sans-serif;
       
    }
    h4{
        /* font-family: 'Kanit', sans-serif;  */
        color: #336699;;
        font-family: 'Oswald', sans-serif;
        margin-top: 7vh;
    }
    .line{
        height: 0.3rem;
        background:  #336699;
        /* margin-bottom: 3rem; */

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
    h4{
        font-family: 'Oswald', sans-serif;
        color: #336699;;
     
    }
`;
const Card = styled(motion.div)`
    padding-bottom: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
   margin: 2rem 10rem;
   
    .line{
        height: 0.5rem;
        background:  #336699;
        margin-bottom: 3rem;

    }
    
`

    

const Cards =styled(motion.div)`
    flex-basis: 25rem;
    height: 60vh;
    background:#ccc ;
    margin: 2rem 1rem;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    span{
        color: white;
    }
    
    h2{
        display: flex;
        /* align-items: center; */
        z-index: 3;
        margin-top: -7rem;
        justify-content: center;
        color: white;
        z-index: 5;
    }
    img{
        
        width: 100%;
        height: 60vh;
        object-fit: cover;
        border-radius: 2rem;
        
    }

`

// const Overlay = styled(motion.div)`
// /* position: relative; */
//     width: 100%;
//     height: 60vh;
//     background:#ccc ;
//     margin: -35.5rem 0rem;
//     border-radius: 2rem;
//     opacity: 0;
//     transition: all 0.5s ease;
//     cursor: pointer;
//     z-index: 3;
//     &:hover{
//             background-color: #0a0a0a;
//             opacity: 50%;
//             color: white;
//             filter: brightness(50%);
//             transition: all 0.5s ease;
//         }
// `

const Hide = styled.div`
    overflow: hidden;
    
`



export default Impact