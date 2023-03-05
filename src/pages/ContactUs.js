import React from 'react'
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim} from "../animation"
import styled from 'styled-components';
import { FaFacebook, FaTwitter,FaInstagramSquare } from "react-icons/fa";
import sister from '../img/girlstown.jpg'
const ContactUs = () => {

  const [formStatus, setFormStatus] = React.useState('Send')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
  }
  return (
    <ContactStyle style={{background:"#fff"}} exit='exit' variants={pageAnimation} initial='hidden' animate='show'> 
    <div>
    <Title>
      <Hide>
        <motion.h2 variants={titleAnim}>CONTACT US</motion.h2>
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
      <div>
      <img  src={sister} alt='sisters'/>
    </div>
    </div>
    
    <Form onSubmit={onSubmit}>
    <Title>
      <Hide>
        <motion.h2 variants={titleAnim}>Email us</motion.h2>
      </Hide>
    </Title>
        <Element className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </Element>
        <Element className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </Element>
        <Element className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </Element>
        <button className="submit" type="submit">
          {formStatus}
        </button>
      </Form>
    </ContactStyle>
  )
}
const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    background: #ececec;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img{
      width: 50vh;
      object-fit: cover;
    }
`

const Title =styled.div`
  margin-bottom: 1rem;
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
const Buttons = styled.div`
  button{
    height: 5rem;
    font-size: 3rem;
    border: none;
    padding: 1rem;
    margin: 1rem;
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
  height: 80vh;
  width: 70vh;
  margin-left: 10rem;
  h2{
    margin: 3vh 0vh 0vh 3vh;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  label{
    margin: 1rem;
  }
  input{
    height: 3rem;
    width: 90%;
    margin: 1rem;
    font-size: 1rem;
  }
  textarea{
    height: 7rem;
    width: 90%;
    margin: 1rem;
    font-size: 1rem;
  }
  
  button{
    margin: 1rem 2rem;
  }
`
const Element = styled.div`
  margin: 1rem;
`
export default ContactUs