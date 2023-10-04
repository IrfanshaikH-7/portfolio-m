'use client'
import { Sparkle, Star, CircleEllipsis } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import HeroL from '@/components/Hero/HeroL';
import HeroR from '@/components/Hero/HeroR';
import Cursor from '@/components/cursor';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import { ModeToggle } from '@/components/ui/mode-toggle';
import LandingS from '@/components/Hero/LandingS';

const Home: NextPage = () => {


  return (
    <>
      {/* <motion.main className='h-auto w-full flex justify-center overflow-y-auto z-40'
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}
      >
        <motion.div className=' w-96 flex mx-auto z-50 fixed bg-transparent  h-auto transition-opacity'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}
        >
          <Navbar />
        </motion.div>
        <section className='h-screen w-full mx-auto flex-col justify-center items-center'>
          <div className='relative mt-12 flex lg:flex-row flex-col gap-x-2  h-[80%] w-[80%] mx-auto my-auto bg-emerald-400'>
            */}

      {/* <div className='absolute h-60 w-2 rounded-m top-0 right-0 bg-white ' />
            <div className='absolute h-60 w-2 rounded-m top-0 right-0 bg-white ' /> */}

      {/* <HeroL />
            <div className='flex justify-center items-center flex-1 h-full w-full'>
              <div className='h-full space-y-12 flex-1 w-full  p-4 overflow-y-auto overflow-x-hidden snap-y'>
                <HeroR />
                <motion.div className='flex items-center text-center to-be h-full flex-1 w-full text-white text-9xl snap-mandatory snap-start '
                  initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  to be content
                </motion.div >
              </div>
            </div>
          </div>
          <div className='h-60 w-full bg-white rounded-2xl'>

          </div>
        </section>

      </motion.main>
      <section className='h-full w-7xl flex justify-center items-center bg-[#060608] -z-40'>
        <div className='h-full w-full flex justify-start items-center'>
          <LandingS />
        </div>

      </section> */}

      <section className=' h-full w-full '>
        <motion.main className='h-full w-full flex justify-center  '
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}
        >
          <motion.div className=' w-96 flex mx-auto z-50 fixed bg-transparent  h-auto transition-opacity'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}
          >
            <Navbar />
          </motion.div>
          <section className='h-full w-full mx-auto flex-col justify-center items-center z-10 bg-gradient-to-t from-emerald-400 from-10% via-sky-500 via-60% to-indigo-500 to-90% '>
            <div className='relative mt-12 flex lg:flex-row flex-col gap-x-2  h-[80%] w-[90%] mx-auto my-auto -z-20'>

              <HeroL />
              <div className='flex justify-center items-center flex-1 h-full w-full'>
                <div className='h-full space-y-12 flex-1 w-full py-4 overflow-y-auto overflow-x-hidden snap-y no-scrollbar '>
                  <HeroR />
                  <motion.div className='flex items-center text-center justify-center h-full flex-1 w-full text-white text-8xl snap-mandatory snap-start px-4  '
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  >
                    to be perferendis.
                  </motion.div >
                </div>
              </div>
            </div>
            <section className='bg-gradient-to-t from-emerald-400 via-emerald-400 h-60 -mt-8 rounded-b-[80px] pointer-events-none md:px-32 py-4 '>
              <div className='h-full w-full flex-col justify-center items-center bg-white rounded-[80px] overflow-hidden py-2'>


                <h1 className='text-center text-black font-semibold font-syne'>Exploring...</h1>
                <div className='h-full w-full flex justify-evenly items-start mt-6 '>

                  <div className=' flex flex-col justify-start items-center px-28'>
                    <div className=' text-black text-lg font-extrabold font-syne relative z-30'>
                      <svg className='absolute -z-10 -top-11' viewBox="20 30 150 140" xmlns="http://www.w3.org/2000/svg" width={100} height={100}>
                        <path fill="#34d39995" d="M65,-16.8C73.7,5.6,62.8,38.6,42.5,51.8C22.2,65,-7.7,58.3,-31,41.6C-54.3,24.9,-71.1,-1.8,-64.8,-20.8C-58.6,-39.9,-29.3,-51.2,-0.6,-51C28.2,-50.8,56.3,-39.1,65,-16.8Z" transform="translate(100 100)" />
                      </svg>
                      Development
                    </div>
                    <p className='text-slate-600 text-center mt-2'>
                      I Love developing new websites and discovering new technologies
                    </p>
                  </div>

                  <div className=' flex flex-col justify-start items-center px-28'>
                    <div className=' text-black text-lg font-bold font-syne relative z-30'>
                      <svg className='absolute -z-10 -top-14' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width={140} height={140}>
                        <path fill="#34d39995" d="M66.1,-20.6C72.1,-3.1,53.9,23.1,33.4,35.6C12.8,48.1,-10.2,46.9,-28.2,34.8C-46.1,22.7,-59,-0.3,-53.5,-17.2C-47.9,-34.2,-24,-45,3.1,-46C30.1,-46.9,60.2,-38.1,66.1,-20.6Z" transform="translate(100 100)" />
                      </svg>
                      Opensource
                    </div>
                    <p className='text-slate-600 text-center mt-2'>
                      I Love developing new websites and discovering new technologies
                    </p>
                  </div>

                  <div className=' flex flex-col justify-start items-center px-28'>
                    <div className=' text-black text-lg font-bold font-syne relative z-30'>
                      <svg  className='absolute -z-10 -top-14'  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={140} height={140}>
                        <path fill="#34d39995" d="M66.4,-23.1C71.8,-5,52.1,19.7,30.6,33.2C9.2,46.7,-14,48.9,-35.1,36.3C-56.2,23.8,-75.3,-3.4,-69.1,-22.6C-63,-41.8,-31.5,-52.8,-0.5,-52.7C30.5,-52.5,61,-41.1,66.4,-23.1Z" transform="translate(100 100)" />
                      </svg>
                      Software Engineer
                    </div>
                    <p className='text-slate-600 text-center mt-2'>
                      I Love developing new websites and discovering new technologies
                    </p>
                  </div>

                </div>
              </div>
            </section>


          </section>
        </motion.main>
        <div className='bg-transparent h-screen w-full'>
        </div>
        <div className='h-12 bg-transparent w-full'>

        </div>


      </section>

      <div className=' fixed top-0 h-screen w-full bg-black -z-50'>
        <p className='text-center text-9xl'>hello</p>
      </div>
    </>
  );
};

export default Home;