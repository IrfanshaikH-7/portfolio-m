import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className=' flex h-60 w-full px-4 md:px-0 md:w-[80%] mx-auto '>

            <div className='hidden lg:flex text-4xl flex-1 flex-col w-full h-full justify-center items-center '>
                
                <p className='text-7xl xl:text-9xl'>IrfanShaikH</p>
            </div>
            <div className=' flex-1 gap-12 flex flex-row w-full h-full justify-center items-start  py-12'>
                <div className='flex flex-col'>
                    <h1 className='underline'>More</h1>
                    <p>414irfann@gmail.com</p>
                    <div className='flex gap-4 '>
                         <Link href='http://github.com/IrfanshaikH-7' className='h-12 w-12 border-2 flex justify-center items-center'><Github className='text-black fill-black dark:text-white dark:fill-white' /></Link>
                    <Link href='http://github.com/IrfanshaikH-7' className='h-12 w-12 border-2 flex justify-center items-center'><Linkedin className='text-black fill-black dark:text-white dark:fill-white' /></Link>
                    </div>
                   
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='underline'>Quick links</h1>
                    <p>home</p>
                    <p>portfolio</p>
                    <p>about</p>
                    <p>contact</p>
                    <p>admin</p>
                </div>

            </div>

        </section>
    )
}

export default Footer
