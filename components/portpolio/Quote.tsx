"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Quote = () => {
  return (
        <motion.div className="w-[85%] h-[85%] mx-auto flex flex-col items-center justify-center py-24 space-y-8"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0, transition:{duration:0.5,delay:0.3, type:'tween', delayChildren:1}  }} 
        >
                  <motion.h4 className="text-xl font-semibold underline"
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView={{ opacity: 1, y: 0, transition:{duration:0.5,delay:0.3, type:'tween', delayChildren:1}  }} 
                 >Quote of the day!!</motion.h4>
                    <p className="text-2xl md:text-6xl font-semibold text-center">&ldquo;Don&lsquo;t worry if it doesn&lsquo;t work right. If everything did, you&lsquo;d be out of a job. hehe&rdquo;</p>
                </motion.div>
  )
}

export default Quote
