import React, {useState} from 'react'
import home1 from '../img/virginofthepoor.jpg'
import adlas from '../img/adlas03.jpg'
import classPic from '../img/class2019a.jpg'

//Animations
import { motion } from 'framer-motion';

import {titleAnim, fade, photoAnim, pageAnimation, lineAnim } from "../animation"
import styled from 'styled-components';
import DetailSection from '../components/DetailSection';
import Carousel from '../components/Carousel';
import Impact from '../components/Impact';

const Home = () => {

    // const imageArray = [adlas, home1, classPic];

    // const [index, setIndex] = useState(0);
    // const nextStep=()=>{
    //    if(index===imageArray.length - 1){
    //     setIndex(0)
    //     return
    //    }
    //    setIndex(index+1)
    // }
    // const prevStep=()=>{
    //     console.log("prev")
    //     if(index===0){
    //         setIndex(imageArray.length - 1)
    //         return
    //     }
    //     setIndex(index-1)
    // }
  return (
    
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        {/* <StyledHome>
            <Description>
                <motion.div >
                    <Hide>
                        <motion.h2 variants={titleAnim}>The Sisters of Mary School - Adlas</motion.h2>
                        <Line transition={{duration:0.75, when: "beforeChildren", staggerChildren: 0.25,}} 
                            initial={{width:"0%"}} 
                            animate={{width:"100%"}}/>
                    </Hide>
                </motion.div>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
        </StyledHome> */}
        {/* <Image>
            <motion.img variants={photoAnim} src={imageArray[index]} alt='virgin of the poor' className="slides"/>
            <button className='prevButton' onClick={prevStep}>b</button>
            <button className='nextButton' onClick={nextStep}>b</button>
        </Image>  */}
        <Description>
            <motion.h2 variants={titleAnim}><span >Serving the Lord with Joy.</span></motion.h2>
            <motion.p variants={fade}>
                The Sisters of Mary School strives for excellence in both academic and vocational training with complete facilities and qualified teachers. 
                 
                The Sisters of Mary Schools seek to prepare graduates with knowledge that will help them live better lives as ideal Christians by instilling discipline, 
                a positive work ethic, and a passion for virtues in the minds of the students.
            </motion.p>
            <motion.p variants={fade}>
                The School provides free food, clothing, shelter, medical and dental services, and secondary education for deserving students from poorest of the poor families. 
            </motion.p>
            <motion.p variants={fade}> 
                The Sisters of Mary Schools seek to prepare graduates with knowledge that will help them live better lives as ideal Christians by instilling discipline, 
                a positive work ethic, and a passion for virtues in the minds of the students.
            </motion.p>
            <motion.button variants={fade}>Contact us</motion.button>
        </Description>
        <Card></Card>
        <Carousel/>
        <Impact/>
        {/* <DetailSection/> */}
    </motion.div>
  )
}
// styled component
// install vscode styled-components extension for styling

const StyledHome = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: white;
`;

const Description = styled.div`
    width: 35%;
    z-index: 3;
    /* margin-top: 20vh; */
    margin:  10rem;
    position: absolute;
    span{
        color: #f1db0c;
       
        
    }
    
    h2{
        color: #ffffff;
        font-weight: bolder;
        padding: 1vh;
       
    }
    p{
        
        /* font-weight: lighter; */
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        padding: 1vh;
        color: #d7d7d8;
        /* margin: 0%; */
    }
    button{
        margin: 1rem;
        color: white;
        font-weight: lighter;
        
    }
`;
const Card = styled(motion.div)`
    
        position: absolute;
        z-index: 1;
        width: 45%;
        height: 70%;
        background: #2b2a2b;
        opacity: 50%;
        margin: 10vh;
        border-radius: 10rem 0 10rem 0;
    
`

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    /* filter: brightness(50%); */
    margin-top: -25vh;
    
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }

    button{
        padding: 16px;
        font-size: 18px;
        width: 64px;
        border-radius: 32px;
        aspect-ratio: 1;
        border: none;
        cursor: pointer;
        text-align: center;
        color: white;
        background-color: #ccc;
    }
    button:hover{
        background-color: #2452;
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
`;




export default Home