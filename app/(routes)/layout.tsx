"use client"
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const RouteLayout = async({
    children
}:{
    children: React.ReactNode;
}) => {

    return(
        <main>
            <div className="flex justify-center">
            <motion.div className=' flex w-96 z-50 fixed bg-transparent h-auto transition-opacity'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}

          >
            <Navbar />
            
          </motion.div>
            </div>
            {children}
        </main>
        
    );

}
export default RouteLayout;