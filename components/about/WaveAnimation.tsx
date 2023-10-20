"use client"
import { motion } from 'framer-motion'
import React from "react";
import Lottie from "lottie-react";
import lottie from '@/components/about/FirtQy8iu8.json'

const WaveAnimation = () => {
    return (
        <>
            <div className="h-fit w-fit snap-mandatory snap-start ">
                    
                    <motion.div
                    initial={{scale:1.1}}
                    animate={{scale:1}}
                    transition={{duration:0.4}}
                    >
                    <Lottie animationData={lottie} loop={true} className='h-28 w-28 mt-2 '/>    
                    </motion.div>
            </div>
        </>
    );
}

export default WaveAnimation;