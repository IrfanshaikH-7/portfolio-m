'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Cursor= () => {

    useEffect(()=> {
        const cursor = document.getElementById('custom-cursor');
        const cursortext = document.querySelector('.cursor-text');

        const onMouseMove = (e:MouseEvent) => {
            const{ clientX, clientY} = e;
            gsap.to(cursor,{x:clientX -10,y:clientY -10});
        }
        window.addEventListener('mousemove', onMouseMove)
        
           
        
    },[])  
    
    return(
        <div id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'> View</span>
        </div>
    )
}
  
export default Cursor;