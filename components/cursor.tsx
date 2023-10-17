'use client'
import { useEffect } from 'react';
import { Link } from 'lucide-react';
import { gsap } from 'gsap';


const Cursor = () => {

    useEffect(() => {
        
        const cursor = document.getElementById('custom-cursor');
        const cursorText = document.querySelector('.cursor-text');
        const Links = document.querySelectorAll('a')

        const onMouseLeave = (e: MouseEvent) => {
            gsap.to(cursor, {scale:0})
            cursor?.setAttribute('style',"display: none;")
            console.log("Leavd")
        }
        
        window?.addEventListener('mouseleave', () => console.log("leaved"))

        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, { x: clientX - 10, y: clientY - 10 ,})
            // console.log(LinksbyID)
            
        }
        

        const onMouseE = (event: MouseEvent) => {
            // console.log("Entered")
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
        <div id='custom-cursor' className='custom-cursor hidden sm:block'>
            <span className='cursor-text'><Link height={8} width={8}/></span>
        </div>
    )
}

export default Cursor;