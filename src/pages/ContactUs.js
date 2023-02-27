import React from 'react'
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim} from "../animation"
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <ContactStyle style={{background:"#fff"}} exit='exit' variants={pageAnimation} initial='hidden' animate='show'> 
    <Title>
      <Hide>
        <motion.h2 variants={titleAnim}>Sisters of Mary School - Adlas, Inc.</motion.h2>
      </Hide>
    </Title>
    <div>
      <Hide>
      <Social variants={titleAnim}>
        <Circle/>
        <h2>Bo. Adlas, Silang Cavite</h2>
      </Social>
      </Hide>
      <Hide>
      <Social variants={titleAnim}>
        <Circle/>
        <h2>Tel No. (02) 529-8318; (046) 865-2546;</h2>
      </Social>
      </Hide>
      <Hide>
      <Social variants={titleAnim}>
        <Circle/>
        <h2>Email: smsadlas@thesistersofmaryschools.edu.ph</h2>
      </Social>
      </Hide>
    </div>
    </ContactStyle>
  )
}
const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    background: #ececec;

`

const Title =styled.div`
  margin-bottom: 4rem;
  color: black;
`
const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
    margin: 2rem;
  }
`
export default ContactUs