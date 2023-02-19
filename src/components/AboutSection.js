import React from 'react'
import home1 from '../img/home1.png'
//styled components
import {About, Description, Image, Hide} from '../styles'
//Framer motion
import {motion} from 'framer-motion';

const AboutSection = () => {

    const titleAnim={
        hidden:{opacity:0},
        show:{ opacity:1, transition: { duration:2 }},
    };
    const container = {
        hidden: {x:100},
        show: {x:0, transition:{duration:.75, ease:"easeOut", staggerChildren: .75}},
    }
  return (
    <About>
        <Description>
            <motion.div >
                <Hide>
                    <motion.h2 >We work to make</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 >your <span>dreams</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 >true.</motion.h2>
                </Hide>
            </motion.div>
            <p>Contact us for any photography ideas that you have. We are profesionals with amazing skills</p>
            <button>Contact us</button>
        </Description>
        <Image>
            <img src={home1} alt='guy with the camera'/>
        </Image>
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