import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import React, { useEffect } from 'react'

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.5});
   
    useEffect(()=>{
        if(view){
            controls.start('show')
        }
    },[view])

  return [element, controls];
 
}

