"use client"
import { FileText, Github, Linkedin, MoveRight, Twitter } from "lucide-react";
import Link from "next/link";
import {motion} from 'framer-motion'
const HeroL = () => {
    return (
        <motion.div className=' flex flex-1 flex-col justify-center items-end'
        initial={{opacity:0,x:-100}}
        animate={{opacity: 1 , x : 0 }}
        transition={{duration:0.4, staggerChildren:0.4}}
        >
            <div className="flex flex-col justify-center  w-full h-full">
                <div className="flex flex-col items-center md:items-start justify-center p-8 w-full h-full">
                <div >
                <h1 className="font-medium  text-3xl xl:text-7xl text-center md:text-start lg:self-start  ">
                    Greetings!!
                </h1>
                
                <p className=" font-semibold md:font-normal text-xs px-3  xl:text-base mt-4 text-slate-200 "> 
                 I&lsquo;m a Irfan a Full-Stack Developer based in Hyderabad, India.<br/><span className="font-normal ">I enjoy working on every aspect of web development, from the user interface to the server logic.</span>
                </p>

                </div>
                <div className="flex  gap-8 p-2 relative">
                   <Link href='/contact' className="heroR-link w- group relative text-sm lg:px-8 px-6 py-4 font-semibold   bg-gradient-to-r from-emerald-400 bg-sky-500 hover:bg-indigo-400  text-slate-300 border border-slate-300">
                    Connect
                    <MoveRight className="absolute group-hover:-right-4 -right-3 transition-all duration-300" />
                </Link>
                <Link href='/contact' className="heroR-link group relative text-sm lg:px-8 px-6 py-4 font-semibold text-slate-300 border border-slate-300 hover:bg-white hover:text-slate-500">
                    Resume
                    <FileText className="absolute group-hover:-right-6 invisible group-hover:visible -right-5 transition-all ease-out" />
                </Link> 
                </div>
                </div>
                <div className="lg:hidden flex justify-center gap-8 ">
                    <Link href='https://github.com/IrfanshaikH-7' className=" p-1 rounded-full border-2 border-dotted hover:border-solid border-white hover:-translate-y-px group transition-all duration-300"><Github className="h-7 w-7 fill-emerald-400 stroke-1 text-slate-200 group-hover:fill-white transition-all duration-300"/></Link>
                    <Link href='https://github.com/IrfanshaikH-7' className=" p-1 rounded-full border-2 border-dotted hover:border-solid border-white hover:-translate-y-px group transition-all duration-300"><Linkedin className="h-7 w-7 fill-emerald-400 stroke-1 text-slate-200 group-hover:fill-white transition-all duration-300"/></Link>
                    <Link href='https://github.com/IrfanshaikH-7' className=" p-1 rounded-full border-2 border-dotted hover:border-solid border-white hover:-translate-y-px group transition-all duration-300"><Twitter className="h-7 w-7 fill-emerald-400 stroke-1 text-slate-200 group-hover:fill-white transition-all duration-300"/></Link>
                    
                </div>
                
            </div>
        </motion.div>
    );
}

export default HeroL;

/*
<svg
*/ 