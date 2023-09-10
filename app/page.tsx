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

const Home: NextPage = () => {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <>
      <AnimatePresence>
        <motion.main className='bg-[#060608] h-screen w-full'
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}

        >
          <motion.div className='z-50 fixed bg-transparent w-full h-auto transition-opacity'
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }}

          ><Navbar />
          </motion.div>

          <section className='h-full w-full m-auto flex justify-center items-center'>
            <div className='mt-12 flex lg:flex-row flex-col gap-x-2  h-[90%] w-[90%] mx-auto my-auto'>
              <HeroL />
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
          </section>

        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Home;