import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import adlas from '../img/logo.png'
const Nav = () => {
    const {pathname} = useLocation();
  return (
    <StyledNav>
        
        <h1><Link to="/"  id='logo'> <img src={adlas}/> The Sisters of Mary School - Adlas</Link></h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Line transition={{duration:0.75}} 
                    initial={{width:"0%"}} 
                    animate={{width:pathname==="/" ? "45%":"0%"}}/>
            </li>
            <li>
                <Link to='/about'>About us</Link>
                <Line transition={{duration:0.75}} 
                    initial={{width:"0%"}} 
                    animate={{width:pathname==="/about" ? "55%":"0%"}}/>
            </li>
            <li>
                <Link to='/work'>Our work</Link>
                <Line transition={{duration:0.75}} 
                    initial={{width:"0%"}} 
                    animate={{width:pathname==="/work" ? "55%":"0%"}}/>
            </li>
            <li>
                <Link to='/contact'>Support us</Link>
                <Line transition={{duration:0.75}} 
                    initial={{width:"0%"}} 
                    animate={{width:pathname==="/contact" ? "60%":"0%"}}/>
            </li>
        </ul>
        
    </StyledNav>
  )
};

const StyledNav = styled.nav`
    min-height: 2rem;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 10rem;
    background:#282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: 'PT Serif', serif;
        font-weight: lighter;
        margin-left: 3rem;
    }
    li{
        padding: 1rem 2rem;
        position: relative;
    }
    img{
        height: 2rem;
        position: absolute;
        margin-left: -3rem;
        
    }

`
const Line = styled(motion.div)`
    height: 0.1rem;
    width: 0%;
    background: #7f828b;
    position: absolute;
    bottom: 20%;
    /* left: 20%; */
`
export default Nav