import React, { useState } from 'react'
import styled from 'styled-components'
import { About } from '../styles'

const Footer = () => {
  return (
    <Faq  >
        <h4><span>Support us</span></h4>
    </Faq>

)
};

const Faq =styled(About)`
display: block;
background-color: #ececec;
/* align-items: center; */
text-align: center;
/* position: relative; */
margin-top:100vh;
span{
display: block;
}
h4{
padding-bottom: 2rem;
font-weight: lighter;
}
.faq-line{
background: #000;
height: 0.2rem;
margin: 2rem 0rem;
width: 100%;
}


`
export default Footer