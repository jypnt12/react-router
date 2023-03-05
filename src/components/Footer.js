import React from 'react'
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim} from "../animation"
import styled from 'styled-components';
import { FaFacebook, FaTwitter,FaInstagramSquare } from "react-icons/fa";
import sister from '../img/sisters.jpg'

import adlas from '../img/logo.png'
const Footer = () => {

  
  return (
    <FooterStyle style={{background:"#02063f"}} exit='exit' variants={pageAnimation} initial='hidden' animate='show'> 
    <div>
    <Title>
      <Hide>
        <motion.h1 variants={titleAnim}> <img className='logo' src={adlas}/>THE SISTERS OF MARY SCHOOL</motion.h1>
      </Hide>
    </Title>
    
     

      
      <Hide>
      <Social variants={titleAnim}>
        
        <p>Bo. Adlas, Silang Cavite</p>
      </Social>
      </Hide>
      <Hide>
      <Social variants={titleAnim}>
        
        <p>Tel No. (02) 529-8318; (046) 865-2546;</p>
      </Social>
      </Hide>

      <Hide>
      <Social variants={titleAnim}>
        
        <p>Email: smsadlas@thesistersofmaryschools.edu.ph</p>
      </Social>
      </Hide>
      <Buttons>
        <button><FaFacebook/></button>
        <button><FaTwitter/></button>
        <button><FaInstagramSquare/></button>
      </Buttons>
      
    </div>
    <Form>
      <img  src={sister} alt='sisters'/>
    </Form>  
    
    </FooterStyle>
  )
}
const FooterStyle = styled(motion.div)`
    background: #353535;
    padding: 5rem 10rem;
    color: #ffffff;
    /* min-height: 90vh; */
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    .logo{
        height: 5rem;
        position: absolute;
        margin-left: -8rem;
    }
    p{
      color: white;
    }
`

const Title =styled.div`
  margin-bottom: 1rem;
  color: #fcfcfc;
`
const Hide = styled.div`
  overflow: hidden;
`

const Buttons = styled.div`
  button{
    height: 5rem;
    font-size: 3rem;
    border: none;
    padding: 1rem;
    margin: 1rem;
    color: white;
  }
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: -2rem 0rem;
  h2{
    margin: 2rem;
    
  }
`
const Form = styled.form`
  
  margin-left: 10rem;
  /* height: 3vh; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  img{
      width: 50vh;
      object-fit: cover;
    }
`

export default Footer