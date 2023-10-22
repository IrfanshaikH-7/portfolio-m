"use client"
import { Testimonials } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import TestimonialDialog from './TestimonialDialog'
import { ListTreeIcon } from 'lucide-react'
type Props = {
  testimonials: Testimonials[],
  anonymousTestimonials: Testimonials[]
}
const TestimonialCurosel = ({ testimonials, anonymousTestimonials }: Props) => {

  return (
    <>
      <section className='w-full md:w-[90%] h-full px-4 md:px-0 py-24'>

        <div className='flex justify-center items-center flex-col gap-4 w-full px-4 max-w-full overflow-hidden'>

          <div className='flex max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-full  gap-2  p-2 no-scrollbar slider'>

            {
              anonymousTestimonials.map((testimony) => (
                <div key={testimony.id} className=' flex flex-col justify-start items-start h-40 w-full aspect-video bg-gradient-to-t from-slate-300 to-white dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-700 py-4 px-4 rounded-3xl hover:scale-105 transition-transform duration-300'>

                  <div className='flex justify-self-start self-start items-center gap-3'>
                    <Image
                      className='border-4 aspect-square object-cover border-slate-600 dark:bg-slate-200 rounded-full'
                      src={testimony.imgUrl} alt="profile"
                      height={62}
                      width={62}
                    />
                    <p className='font-semibold text-sm'>Anonymous</p>
                  </div>
                  <p className='text-slate-700 dark:text-slate-300 text-xs '>
                    <span className='text-slate-800 dark:text-white font-bold '>&ldquo;</span>{' '}
                    {testimony.message}
                    {' '}<span className='text-slate-800 dark:text-white font-bold '>&ldquo;</span>
                  </p>

                </div>
              ))
            }
          </div>
        </div>


        <div className='flex justify-center items-center flex-col gap-4 w-full px-4 py-4'>
          <div className='bg-white dark:bg-slate-800 flex justify-between items-center w-full py-2 px-4 md:px-24 rounded-3xl relative group'>
            <div className='text-2xl text-black dark:text-white'>Testimonials <ListTreeIcon className='h-12 w 12 text-white inline-block group-hover:rotate-180 transition-transform duration-300' /> </div>

            <div className=' rounded-full border border-black dark:border-white'>

              <TestimonialDialog />
            </div>


          </div>
          <div className='flex  max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-6xl overflow-x-scroll gap-2  p-2 no-scrollbar'>

            {
              testimonials.map((testimony) => (
                <div key={testimony.id} className=' flex flex-col justify-start items-center h-96 w-full aspect-square bg-gradient-to-t from-slate-300 to-white  border border-slate-500 hover:border-slate-300  dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-700 py-8 px-12 transition-all duration-300 rounded-3xl shadow-md'>

                  <div className='flex justify-self-center self-start items-center gap-3'>
                    <Image
                      className='border-4 aspect-square object-cover border-slate-600 dark:bg-slate-200  rounded-full'
                      src={testimony.imgUrl !== '' ? testimony.imgUrl : '/assets/maleUser.jpeg'} alt="profile"
                      height={128}
                      width={128}
                    />
                    <p className='font-semibold'>{testimony.name}</p>
                  </div>
                  <p className='text-slate-700 dark:text-slate-300'>
                    <span className='text-slate-800 dark:text-white  font-bold text-lg'>&ldquo;</span>{' '}
                    {testimony.message}
                    {' '}<span className='text-slate-800 dark:text-white  font-bold text-lg'>&ldquo;</span>
                  </p>

                </div>
              ))
            }
          </div>
        </div>

      </section>

    </>
  )
}

export default TestimonialCurosel
