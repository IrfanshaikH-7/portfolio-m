"use client"
import { FileText, MoveRight } from "lucide-react";
import Link from "next/link";
import {motion} from 'framer-motion'
const HeroL = () => {
    return (
        <motion.div className=' flex flex-1 flex-col justify-center items-end'
        initial={{opacity:0,x:-100}}
        animate={{opacity: 1 , x : 0 }}
        transition={{duration:0.4, staggerChildren:0.4}}
        >
            <div className="flex flex-col items-start justify-evenly p-8 w-full ">
                <div>
                <h1 className="font-medium  text-7xl xl:text-8xl text-start lg:self-start  ">
                    Greetings!!
                </h1>
                <p className="indent-5 text-xs px-3  xl:text-base mt-4 "> 
                 I'm a Irfan a Full-Stack Developer based in Hyderabad, India. I enjoy working on every aspect of web development, from the user interface to the server logic.
                </p>

                </div>
                <div className="flex gap-8 p-2 relative">
                   <Link href='/contact' className="heroR-link w- group relative text-sm px-8 py-4 font-semibold   bg-gradient-to-r from-emerald-400 bg-sky-500 hover:bg-indigo-400  text-slate-300 border border-slate-300">
                    Connect
                    <MoveRight className="absolute group-hover:-right-4 -right-3 transition-all duration-300" />
                </Link>
                <Link href='/contact' className="heroR-link group relative text-sm px-8 py-4 font-semibold text-slate-300 border border-slate-300 hover:bg-white hover:text-slate-500">
                    Resume
                    <FileText className="absolute group-hover:-right-6 invisible group-hover:visible -right-5 transition-all ease-out" />
                </Link> 
                </div>
                
            </div>
        </motion.div>
    );
}

export default HeroL;

/*
<svg
*/ 