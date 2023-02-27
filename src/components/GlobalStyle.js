
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        /* background: #1b1b1b; */
        /* background:  #ccd1d9; */
        font-family: 'Inter', sans-serif;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #2326d9;
        background: transparent;
        color: #000;
        transition: all 0.5s ease;
        &:hover{
            background-color: #2326d9;
            color: white;
        }

    
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;

    } 
    h3{
        color: #1b1b1b;
    }  
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:  #336699;
    }
    p{
        padding: 3rem 0rem;
        color: #000;
        font-size: 1.4rem;
        line-height: 150%;
    } 
`
export default GlobalStyle;