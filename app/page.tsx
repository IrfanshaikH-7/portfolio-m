'use client'
import Cursor from '@/components/cursor';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <>
    <div className='h-screen w-full bg-slate-500'>
<div className='text-black font-bold '>
      hello world
    </div>
    </div>
    
    </>
  );
};

export default Home;