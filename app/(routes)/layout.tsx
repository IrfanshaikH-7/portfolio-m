"use client"
import Navbar from "@/components/navbar";
import Social from "@/components/utility/Social";
import SocialLarge from "@/components/utility/SocialLarge";
import { motion } from "framer-motion";

const RouteLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {

    return(
        <main >
            <div className="flex justify-center">
            <motion.div className=' flex w-80 lg:w-1/3 z-50 fixed bg-transparent h-auto transition-opacity backdrop-blur-[2px]'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}
          >
            <Navbar />
          </motion.div>
            </div>
            <div className='fixed z-[999999] top-1/4 left-2 md:hidden'>
              <Social />
            </div>
            <div className='fixed z-[999999] top-[28%]  right-2 hidden lg:block'>
              <SocialLarge />
            </div>
            {children}
        </main>
        
    );

}
export default RouteLayout;