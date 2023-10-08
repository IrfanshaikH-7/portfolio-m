"use client"
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion'
import React from "react";
import Lottie from "lottie-react";
import lottie from '@/components/Hero/lottie.json'

const HeroR = () => {
    return (
        <>
        {/* <motion.div className=' h-full w-full snap-mandatory snap-start p-6'
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
            <div className="relative h-full w-full flex justify-center items-center flex-col ">
                <Image
                    src='/assets/hero1.png'
                    alt="image"
                    fill
                    className="object-contain h-full w-full "
                />
                <div className="flex flex-col justify-center items-center absolute bottom-0 z-10 bg--50">
                    <p className="text-green-200 text-xs ">Scroll</p>
                <ChevronDown className="h-4 w-4" />

                </div>
            </div>
            </motion.div> */}
            <div className="h-full w-full snap-mandatory snap-start p-6">
                    
                    <motion.div
                    initial={{scale:1.1}}
                    animate={{scale:1}}
                    transition={{duration:0.4}}
                    >
                    <Lottie animationData={lottie} loop={true} />    
                    </motion.div>
            </div>
        </>
    );
}

export default HeroR;