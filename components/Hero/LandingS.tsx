"use client"
import Link from "next/link";
import { motion } from 'framer-motion'

const LandingS = () => {
    return (
        <div className="px-8 h-full w-full flex flex-col items-end justify-end relative ">
            <motion.section className="flex px-2 flex-col gap-2 md:gap-4 w-full lg:w-1/2 py-2 "
            initial={{ translateY: "-40", opacity:0 }}
            whileInView={{ translateY: "-40",opacity:1 , transition:{type:'tween', duration:0.4, staggerChildren:1}  }}
            
            >
                <div className=" text-4xl flex justify-center items-center text-black dark:text-white font-semibold py-4 px-2">
                    Quicklinks <span className="h-[2px] w-full bg-black dark:bg-white  ml-2 mt-2 px-2" />
                </div>

                <Link href='/portfolio' className="px-1 md:px-3 flex flex-col justify-center items-center w-full h-24 md:h-36 hover:scale-110  bg-gradient-to-r from-sky-400 to-emerald-500 rounded-full hover:border-white border-2 border-blue-200 transition-all duration-300 relative overflow-hidden group">
                    <p className="text-sm md:text-lg font-medium text-slate-200">Projects skills and achievement</p>
                    <p className=" p-2 text-[150px] -right-12 mt-12  uppercase text-white font-bold absolute opacity-0 group-hover:opacity-40 transition-all duration-700">Portfolio</p>
                </Link>

                <div className=" w-full h-20 md:h-24 flex gap-2">
                    <Link href='/about' className="px-1 md:px-3 flex flex-col justify-center items-center w-1/2 h-20 md:h-24 hover:w-3/5 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full hover:border-white border-2 border-blue-200 transition-all duration-300 relative overflow-hidden group">
                        <p className="text-sm md:text-lg font-medium text-slate-200">More about me</p>
                        <p className=" p-2 text-[150px] -right-20 mt-12  uppercase text-white font-bold absolute opacity-0 group-hover:opacity-40 transition-all duration-700">About</p>
                    </Link>
                    <Link href='/about' className="px-1 md:px-3 flex flex-col justify-center items-center w-1/2 h-20 md:h-24 hover:w-3/5  bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full hover:border-white border-2 border-blue-200 transition-all duration-300 relative overflow-hidden group">
                        <p className="text-sm md:text-lg font-medium text-slate-200">Underdevelopment</p>
                        <p className=" p-2 text-[150px] -right-12 mt-12  uppercase text-white font-bold absolute opacity-0 group-hover:opacity-40 transition-all duration-700">Blog</p>
                    </Link>
                </div>

                <Link href='/contact' className="px-1 md:px-3 flex flex-col justify-center items-center w-2/3 h-24 md:h-32 hover:w-full   bg-gradient-to-r from-indigo-400 to-sky-500 rounded-full hover:border-white border-2 border-blue-200 transition-all duration-300 relative overflow-hidden group">
                    <p className="text-sm md:text-lg font-medium text-slate-200">Get in touch</p>
                    <p className=" p-2 text-[150px] -left-8 mt-16  uppercase text-white font-bold absolute opacity-0 group-hover:opacity-40 transition-all duration-700">Contact</p>
                </Link>
            </motion.section>

        </div>

    );
}

export default LandingS;