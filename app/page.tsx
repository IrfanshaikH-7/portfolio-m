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
    <div className='h-screen w-full bg-gray-950 flex justify-center items-center'>
<div className='text-yellow-600 text-5xl font-bold '>
      hello world
    </div>
    <a href="/">alpha</a>
    <a href="/">Lorem ipsum dolor sit amet.</a>
    <a href="/">Lorem ipsum dolor sit amet.</a>
    <a href="/">Lorem ipsum dolor sit amet.</a>
    <a href="/">Lorem ipsum dolor sit amet.</a>

    </div>
    
    </>
  );
};

export default Home;