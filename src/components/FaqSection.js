import React, { useState } from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { fade } from '../animation';
const FaqSection = () => {

    const [element, controls] = useScroll();
  return (
    
        <Faq variants={fade} ref={element} animate={controls} >
            <h2><span>Mission and Vision </span></h2>
            <Toggle title={"Mission"}>
            
                <div className="answer">
                    <p>Inspired by her patroness, the Virgin of the Poor, the Sisters of Mary Schools shall direct their energy and resources to the poorest of the poor youth of the country by way of providing them with high quality Secondary Education intensive on Vocational-Technical Curriculum molding them into citizens committed to serve the nation, to love their fellow being, and spread moral and spiritual values based on the Gospels.</p>
                </div>
           
            </Toggle>
            <Toggle title={"Vision"}>
                <div className="answer">
                    <p>The Sisters of Mary School envisions that the graduates, in their everyday life and in the pursuit of their calling, will become the new disciples in spreading the work of redemption, and at the same time teach and lead by example the Marian virtues of simplicity, charity, gratitude and joy.</p>
                </div>
             
            </Toggle>
            {/* <Toggle title={"Different Payment Methods"}>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi cupiditate ex expedita porro ad doloribus eum natus possimus soluta dolore a mollitia sapiente consequatur dolor, dignissimos aliquam eius obcaecati?</p>
                </div>
            </Toggle>
            <Toggle title={"What product do you offer"}>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione commodi cupiditate ex expedita porro ad doloribus eum natus possimus soluta dolore a mollitia sapiente consequatur dolor, dignissimos aliquam eius obcaecati?</p>
                </div>
            </Toggle> */}
           
            
        </Faq>
   
  )
};

const Faq =styled(About)`
    display: block;
    background-color: #ececec;
    
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #000;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection