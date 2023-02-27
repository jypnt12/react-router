import React, { useEffect } from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/duties.jpg'
//styles
import {About, Description, Image} from "../styles"
import styled from 'styled-components'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {fade} from '../animation'
import { useScroll } from './useScroll'
const ServicesSection = () => {
   const [element, controls]=  useScroll();
  return (
    <Services ref = {element} animate={controls} variants={fade}>
        <Description>
            <h2><span>Four Basic Duties.</span></h2>
            <Cards>
                <Card>
                    <div className="icon">
                        <img src={clock} alt="" />
                        <h3>Study</h3>
                    </div>
                    <p>The student’s main duty is to study.</p>

                </Card>
                <Card>
                    <div className="icon">
                        <img src={teamwork} alt="" />
                        <h3>Pray</h3>
                    </div>
                    <p>All human beings are to communicate with God, their Creator and Father.</p>
                    
                </Card>
                <Card>
                    <div className="icon">
                        <img src={diaphragm} alt="" />
                        <h3>Work</h3>
                    </div>
                    <p>Each student must recognize the value of work, discipline and diligence.</p>
                    
                </Card>
                <Card>
                    <div className="icon">
                        <img src={money} alt="" />
                        <h3>Play</h3>
                    </div>
                    <p>It is necessary to have a healthy mind and body. </p>
                    
                </Card>
            </Cards>
        </Description>
        <Image>
            <img src={home2} alt="schedule" />
        </Image>
    </Services>
  )
};

const Services = styled(About)`
    
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards =styled.div`
    display: flex;
    flex-wrap: wrap;
    
`
const Card =styled.div`
    flex-basis: 20rem;
    
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }

`

export default ServicesSection