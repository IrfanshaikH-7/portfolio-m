"use client"
import { Testimonials } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import TestimonialDialog from './TestimonialDialog'
type Props = {
  testimonials: Testimonials[],
  anonymousTestimonials: Testimonials[]
}
const TestimonialCurosel = ({ testimonials, anonymousTestimonials }: Props) => {

  return (
    <>
      <section className='w-[80%] h-full'>

      <div className='flex justify-center items-center flex-col gap-4 w-full px-4'>
            {/* <div className='bg-slate-800 flex justify-between items-center w-full py-2 px-24 rounded-3xl relative'>
              <h2 className='text-2xl'>Testimonials...</h2>

              <div className=' rounded-full border border-white'>

                <TestimonialDialog />
              </div>


            </div> */}
            <div className='flex max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-6xl overflow-x-scroll gap-2  p-2 no-scrollbar'>

              {
                anonymousTestimonials.map((testimony) => (
                  <div key={testimony.id} className=' flex flex-col justify-start items-start h-40 w-full aspect-video bg-gradient-to-t from-slate-800 to-slate-700 py-4 px-4 rounded-3xl'>

                    <div className='flex justify-self-start self-start items-center gap-3'>
                      <Image
                        className='border-4 aspect-square object-cover rounded-full'
                        src={testimony.imgUrl} alt="profile"
                        height={62}
                        width={62}
                      />
                      <p className='font-semibold text-sm'>Anonymous</p>
                    </div>
                    <p className='text-slate-300 text-sm'>
                      <span className='text-white font-bold text-lg'>&ldquo;</span>{' '}
                      {testimony.message} 
                      {' '}<span className='text-white font-bold text-lg'>&ldquo;</span>
                    </p>

                  </div>
                ))
              }
            </div>
          </div>


      <div className='flex justify-center items-center flex-col gap-4 w-full px-4'>
            <div className='bg-slate-800 flex justify-between items-center w-full py-2 px-24 rounded-3xl relative'>
              <h2 className='text-2xl'>Testimonials...</h2>

              <div className=' rounded-full border border-white'>

                <TestimonialDialog />
              </div>


            </div>
            <div className='flex  max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-6xl overflow-x-scroll gap-2  p-2 no-scrollbar'>

              {
                testimonials.map((testimony) => (
                  <div key={testimony.id} className=' flex flex-col justify-start items-center h-96 w-full aspect-square bg-gradient-to-t from-slate-800 to-slate-700 py-8 px-12 rounded-3xl'>

                    <div className='flex justify-self-center self-start items-center gap-3'>
                      <Image
                        className='border-4 aspect-square object-cover rounded-full'
                        src={testimony.imgUrl} alt="profile"
                        height={128}
                        width={128}
                      />
                      <p className='font-semibold'>{testimony.name}</p>
                    </div>
                    <p className='text-slate-300'>
                      <span className='text-white font-bold text-lg'>&ldquo;</span>{' '}
                      {testimony.message}
                      {' '}<span className='text-white font-bold text-lg'>&ldquo;</span>
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
