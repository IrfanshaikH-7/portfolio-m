"use client"
import { motion } from 'framer-motion'
import React from "react";
import Lottie from "lottie-react";
import lottie from '@/components/contact/contact.json'

const ContactAnimation = () => {
    return (
        <>
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

export default ContactAnimation;
