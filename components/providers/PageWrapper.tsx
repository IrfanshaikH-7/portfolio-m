"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2Icon } from 'lucide-react'
import { type } from 'os'
type Props = {
    children: React.ReactNode,
    classname: string
}
const PageWrapper = ({children, classname}: Props) => {
  return (
    <AnimatePresence mode='wait'>
    <motion.div className={cn('h-full w-full', classname)}
    // initial={{y:50, opacity:0}}
    // animate={{y:0, opacity:1}}
    // exit={{y:-50,opacity:0}}
    // transition={{type:"spring",}}
    >
      {children}

      <motion.div
      className='slide-inn'
      initial={{scaleY:1}}
      animate={{scaleY:0}}
      exit={{scaleY:0}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
      >
        <div className='h-full w-full flex flex-col justify-center items-center'>
        {/* <div role="status" className="space-y-2.5 animate-pulse w-full">
        
                <div className="flex items-center w-full space-x-2">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[400px]">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[440px]">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[360px]">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                
            </div> */}
            <div className='h-full w-full flex flex-col justify-center items-center space-y-2.5'>
                        <div role="status" className="space-y-2.5 animate-pulse w-full px-32">
                            {/* ---------------------------1ST--------------------- */}
                            {/* <div className="flex items-center w-full space-x-2">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-1/2"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[480px]">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[400px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[480px]">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[440px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[360px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div> */}

                            {/* --------------------2ND------------------------- */}
                            <div className="flex items-center w-full space-x-2">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>

                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>

                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-1/2"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>

                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div role="status" className="space-y-2.5 animate-pulse w-full px-32">
                            {/* ---------------------------1ST--------------------- */}
                            <div className="flex items-center w-full space-x-2">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[480px]">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[400px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[480px]">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[440px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-[360px]">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>

                            {/* --------------------2ND------------------------- */}
                            <div className="flex items-center w-full space-x-2">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>

                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>

                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-1/2"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>

                            </div>
                            <div className="flex items-center w-full space-x-2 max-w-full">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
        </div>
      </motion.div>

      <motion.div
      className='slide-out'
      initial={{scaleY:0}}
      animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
      >
        <div className='h-full w-full flex justify-center items-center'>
        <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                <div className="flex items-center w-full space-x-2">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[400px]">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[440px]">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[360px]">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        
      </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default PageWrapper
