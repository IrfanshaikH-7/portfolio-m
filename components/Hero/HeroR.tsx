import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion'

const HeroR = () => {
    return (
        <>
        <motion.div className=' h-full w-full snap-mandatory snap-start p-6'
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
            <div className="relative h-full w-full flex items-center flex-col ">
                <Image
                    src='/assets/hero1.png'
                    alt="image"
                    fill
                    className="object-contain h-full w-full "
                />
                <ChevronDown onClick={() => scrollTo(40,80)} className=" absolute bottom-0 h-8 text-white w-8 z-10" />
            </div>
            </motion.div>
        </>
    );
}

export default HeroR;