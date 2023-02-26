import React, {useState} from 'react'
import home1 from '../img/adlas.jpg'
//styled components
import {About, Description, Image, Hide} from '../styles'
//Framer motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "../animation"
import Wave from './Wave';
import AboutSMS from './AboutSMS';

const AboutSection = () => {

    const [Toggle, setToggle] = useState(true);
  return (
    <About>
        <Description>
            <motion.div >
                <Hide>
                    <motion.h2 variants={titleAnim}>The Glory of</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}> <span>God </span> is  Man Fully</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>Alive.</motion.h2>
                </Hide>
            </motion.div>
            <motion.p variants={fade} >The Sisters of Mary Congregation was founded by Msgr. Aloysius Schwartz, an American diocesan priest now known as Venerable Aloysius Schwartz,
             in 1964 in Busan, South Korea to provide free educational and vocational welfare for the underprivileged children/youth, medical care to the sick and the dying,
              and shelter service to the homeless and helpless.</motion.p>
                                
            <motion.button variants={fade}>Contact us</motion.button>
        </Description>
        <Image>
            <motion.img variants={photoAnim} src={home1} alt='som building'/>
        </Image>
        <Wave/>
    </About>
  )
};

//styled component
//install vscode styled-components extension for styling

// const About = styled.div`
//     min-height: 90vh;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 5rem 10rem;
//     color: white;
// `;

// const Description = styled.div`
//     flex: 1;
//     padding-right: 5rem;
//     h2{
//         font-weight: lighter;
//     }
// `;

// const Image = styled.div`
//     flex: 1;
//     overflow: hidden;
//     img{
//         width: 100%;
//         height: 80vh;
//         object-fit: cover;
//     }
// `;

// const Hide = styled.div`
//     overflow: hidden;
// `

export default AboutSection