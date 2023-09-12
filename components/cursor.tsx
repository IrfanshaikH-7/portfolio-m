'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import { gsap } from 'gsap';
import { MouseEve, TestProps } from '@/types';
import { LinkProps } from 'next/link';
import { AppLinks } from 'next/dist/lib/metadata/types/extra-types';
import { NextPage } from 'next';

const Cursor = () => {

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const cursorText = document.querySelector('.cursor-text');
        const Links = document.querySelectorAll('a')

        
        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, { x: clientX - 10, y: clientY - 10 });
            // console.log(LinksbyID)
            
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
        const onMousel =(event: MouseEvent) => {
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
            <span className='cursor-text'><Link height={8} width={8}/></span>
        </div>
    )
}

export default Cursor;