"use client"
import { motion } from "framer-motion"
import Lottie from "lottie-react";
import Systems from '@/components/Hero/Systems.json'

const LottieHero = () => {
    return ( 
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className='flex items-end
                     h-full w-full'
          >
            <Lottie animationData={Systems} loop={true} className=' ' />
          </motion.div>
     );
}
 
export default LottieHero;