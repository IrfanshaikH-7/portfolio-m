import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Github, Linkedin, LinkedinIcon, Twitter } from 'lucide-react'

const SocialLarge = () => {
  return (
    <div className='h-96 w-12 bg-transparent backdrop-blur-sm border-2 border-slate-500 rounded-3xl '>
      <div className='h-full w-full gap-2 flex flex-col justify-center items-center py-6'>
        <div className='h-full w-full flex-1  flex justify-center items-center' ><p className='text-sm rotate-90 dark:text-white text-slate-600 font-semibold'>414irfann@gmail.com</p></div>

        <div className='gap-2 flex flex-col justify-center items-center '>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-end  px-2"><a href="#twitter"><Github className="fill-slate-600 dark:fill-white dark:text-white text-slate-600 p-[3px] " /></a></TooltipTrigger>
              <TooltipContent side="left" className="bg-transparent backdrop-blur-sm border-0 border-l border-slate-300 px-3 py-1 ">
                <p>Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-end  px-2"><a href="#twitter"><Twitter className="fill-slate-600 dark:fill-white dark:text-white text-slate-600 p-[3px] " /></a></TooltipTrigger>
              <TooltipContent side="left" className="bg-transparent backdrop-blur-sm border-0 border-l border-slate-300 px-3 py-1 ">
                <p>Twitter/X</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-end  px-2"><a href="#twitter"><Linkedin className="fill-slate-600 dark:fill-white dark:text-white text-slate-600 p-[3px] " /></a></TooltipTrigger>
              <TooltipContent side="left" className="bg-transparent backdrop-blur-sm border-0 border-l border-slate-300 px-3 py-1 ">
                <p>LinkenIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
      </div>
    </div>
  )
}

export default SocialLarge
