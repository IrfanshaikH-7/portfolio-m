'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MouseEve } from '@/types';

const Cursor = () => {

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const cursorText = document.querySelector('.cursor-text');
        const Links = document.querySelectorAll('a')
        
        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, { x: clientX - 10, y: clientY - 10 });
            console.log(e.target)
            
        }
        

        const onMouseE = (event: MouseEvent) => {
            if (event.target instanceof Element){
                if(event.target.classList.contains('view')){
                    gsap.to(cursor,{duration:0.1,scale:4})
                    cursorText?.setAttribute('style', 'display: block;')
                }else{
                    gsap.to(cursor,{scale:4})
                    cursorText?.setAttribute('style', 'display: block;')
                    
                }
            }
        }
        const onMousel =() => {
            gsap.to(cursor,{scale:1})
            cursorText?.setAttribute('style', 'display: none; ')
        }
        
        Links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseE);
            link.addEventListener('mouseleave', onMousel);
        })
        window.addEventListener('mousemove', onMouseMove);
    }, [])

    return (
        <div id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'>view</span>
        </div>
    )
}

export default Cursor;