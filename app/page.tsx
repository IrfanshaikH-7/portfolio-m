
import HeroL from '@/components/Hero/HeroL';
import HeroR from '@/components/Hero/HeroR';
import type { NextPage } from 'next';
import Navbar from '@/components/navbar';
import LandingS from '@/components/Hero/LandingS';
import LottieHero from '@/components/portpolio/lottiehero';
// import { testimonials } from '@/public/data/testimonials';
import Image from 'next/image';
import TestimonialDialog from '@/components/Hero/TestimonialDialog';
import { db } from '@/lib/db';
import TestimonialCurosel from '@/components/Hero/TestimonialCurosel';

const Home: NextPage = async () => {
  const testimonials = await db.testimonials.findMany({ where: { anonymous: false } })
  const anonymousTestimonials = await db.testimonials.findMany({ where: { anonymous: true } })

  return (
    <>
      <section className=' h-full w-full overflow-x-hidden'>
        <main className='h-full w-full flex justify-center'>
          <div className='w-80 lg:w-1/3 flex mx-auto z-50 fixed bg-transparent  h-auto transition-opacity'>
            <Navbar />
          </div>
          <section className='h-full w-full mx-auto flex-col justify-center items-center z-10 bg-gradient-to-t from-emerald-400 from-10% via-sky-500 via-60% to-indigo-500 to-90%  rounded-b-[80px] '>

            <div className='hidden lg:flex relative mt-12  lg:flex-row flex-col gap-x-2  h-[80%] w-[90%] mx-auto my-auto -z-20 '>
              <HeroL />
              <div className='flex justify-center items-center flex-1 h-full w-full '>
                <div className='h-full space-y-12 flex-1 w-full py-4 overflow-y-auto overflow-x-hidden snap-y no-scrollbar bg-blue-00 '>
                  <HeroR />
                  <div className='flex items-center text-center justify-center h-full flex-1 w-full text-white text-8xl snap-mandatory snap-start px-4'>
                    to be perferendis.
                  </div >
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className='flex flex-col justify-center items-center lg:hidden relative mt-12 h-full w-[90%] mx-auto my-auto -z-20  '>

              <div className='h-1/3 w-2/3  '>
                <HeroR />
              </div>
              <div className='px-24  pb-24'>
                <HeroL />
              </div>
            </div>

            <section className='hidden lg:block bg-gradient-to-t from-emerald-400 via-emerald-400 h-60 mt-24 lg:-mt-8 rounded-b-[80px] pointer-events-none md:px-16 xl:px-32 py-4 '>
              <div className='h-full w-full flex-col justify-center items-center bg-white rounded-[80px] overflow-hidden py-2'>
                <h1 className='text-center text-black font-semibold font-syne'>Exploring...</h1>

                <div className='h-full w-full flex justify-evenly items-start gap-4 xl:gap-8 mt-6 '>

                  <div className='h-full w-1/3 flex flex-col justify-start items-center'>

                    <div className=' text-black text-lg font-extrabold font-syne relative z-30'>
                      <svg className='absolute -z-10 -top-11' viewBox="20 30 150 140" xmlns="http://www.w3.org/2000/svg" width={100} height={100}>
                        <path fill="#34d39995" d="M65,-16.8C73.7,5.6,62.8,38.6,42.5,51.8C22.2,65,-7.7,58.3,-31,41.6C-54.3,24.9,-71.1,-1.8,-64.8,-20.8C-58.6,-39.9,-29.3,-51.2,-0.6,-51C28.2,-50.8,56.3,-39.1,65,-16.8Z" transform="translate(100 100)" />
                      </svg>
                      Development
                    </div>
                    <p className='text-slate-600 text-sm px-4 lg:px-16 text-center mt-2'>
                      I Love developing new websites and discovering new technologies
                    </p>
                  </div>

                  <div className='h-full w-1/3 flex flex-col justify-start items-center  '>
                    <div className=' text-black text-lg font-bold font-syne relative z-30'>
                      <svg className='absolute -z-10 -top-14' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={140} height={140}>
                        <path fill="#34d39995" d="M66.1,-20.6C72.1,-3.1,53.9,23.1,33.4,35.6C12.8,48.1,-10.2,46.9,-28.2,34.8C-46.1,22.7,-59,-0.3,-53.5,-17.2C-47.9,-34.2,-24,-45,3.1,-46C30.1,-46.9,60.2,-38.1,66.1,-20.6Z" transform="translate(100 100)" />
                      </svg>
                      Opensource
                    </div>
                    <p className='text-slate-600 text-sm px-4 lg:px-16 text-center mt-2'>
                      In true open source Development, theres lots of visibility all the way through the development process.
                    </p>
                  </div>
                  <div className='h-full w-1/3 flex flex-col justify-start items-center  '>
                    <div className=' text-black text-lg font-bold font-syne relative z-30'>
                      <svg className='absolute -z-10 -top-14' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={140} height={140}>
                        <path fill="#34d39995" d="M66.4,-23.1C71.8,-5,52.1,19.7,30.6,33.2C9.2,46.7,-14,48.9,-35.1,36.3C-56.2,23.8,-75.3,-3.4,-69.1,-22.6C-63,-41.8,-31.5,-52.8,-0.5,-52.7C30.5,-52.5,61,-41.1,66.4,-23.1Z" transform="translate(100 100)" />
                      </svg>
                      DSA
                    </div>
                    <p className='text-slate-600 text-sm text-center mt-2 px-4 lg:px-16'>
                      Data dominates.! If you&lsquo;ve chosen the right data structures and organized things well..
                    </p>
                  </div>

                </div>
              </div>
            </section>
          </section>
        </main>
        <div className=' bg-transparent h-screen w-full'>
          <LandingS />
        </div>
        <div className='h-20 bg-transparent w-full'></div>

        <section className='h-screen w-full bg-slate-900 rounded-t-[80px] flex flex-col items-center justify-center relative'>
          {/* <TestimonialCurosel testimonials={testimonials} anonymous={false}/> */}
          

          <div>
            <TestimonialCurosel testimonials={testimonials} anonymousTestimonials={anonymousTestimonials}/>
          </div>

        </section>
      </section>

      <div className='flex flex-col fixed top-0 h-screen w-full  -z-50 '>
        <div className='z-[999] w-full flex items-center justify-center'>
          <h1 className='text-5xl font-bold text-center mt-12 pt-20  max-w-5xl'> <span>“</span>Experience is the name everyone gives to their mistakes.<span>“</span></h1>
          <p></p>
        </div>
        <div className='hidden lg:flex flex-1 w-full  justify-self-end it justify-center items-center relative -z-20'>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 700" className="overflow-hidden block self-center justify-self-center opacity-25 blur-md absolute -z-50" width="900" height="900"><defs><linearGradient id="two-361" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="hsl(162, 100%, 58%)" stop-opacity="1"></stop><stop offset="100%" stop-color="hsl(270, 73%, 53%)" stop-opacity="1"></stop></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-360" d="M 126.273468 22.265419 C 120.886289 27.551837 120.589467 38.045158 123.574586 44.977471 C 149.392439 104.934017 294.133717 98.798136 282.324417 163.000078 C 278.237582 185.218395 238.22521 175.612526 216.447941 181.621387 C 199.235643 186.370666 181.698157 192.130042 164.200417 195.686437 C 148.719061 198.833004 132.179035 198.731991 116.7836 202.275128 C 103.732385 205.278762 91.401761 212.636008 78.189128 214.822864 C 65.095779 216.989977 49.388232 222.149296 37.976306 215.374334 C 14.886842 201.666724 24.750873 153.823081 0 143.410772 C -8.467782 139.848508 -19.116933 146.132039 -26.685186 151.339208 C -50.825709 167.948559 -51.528182 224.258199 -80.727001 221.79561 C -96.646028 220.45302 -89.204604 186.433729 -103.340557 178.991094 C -118.598345 170.957807 -140.866674 194.532076 -155.244948 185.013724 C -167.841221 176.675049 -155.061506 148.638462 -168.148601 141.093428 C -206.970389 118.711709 -273.629335 209.423777 -300.078607 173.250464 C -318.843601 147.586544 -269.271947 116.226382 -249.954218 90.975895 C -234.389583 70.631132 -200.71237 59.928106 -196.537449 34.654854 C -194.485467 22.233002 -217.892752 11.374132 -212.494405 0 C -199.902544 -26.530622 -129.472002 6.92275 -126.336328 -22.276504 C -119.663573 -84.412884 -311.544704 -47.148065 -295.435813 -107.529842 C -285.164325 -146.03098 -214.572046 -104.292665 -174.864111 -100.957842 C -153.984365 -99.204282 -124.963704 -77.508572 -111.775226 -93.790551 C -97.437116 -111.491822 -136.438621 -136.658654 -133.639881 -159.265808 C -131.990882 -172.585788 -125.086423 -192.129771 -111.738757 -193.537205 C -81.167443 -196.760772 -74.570472 -115.137778 -46.308303 -127.231016 C 3.179549 -148.406616 -96.898171 -261.855389 -51.183017 -290.27331 C -34.93966 -300.370671 -19.049956 -261.378175 -0.000001 -263.081865 C 22.528475 -265.09665 33.526623 -315.370732 53.862392 -305.468811 C 100.870852 -282.579386 12.719051 -179.732322 53.514472 -147.029805 C 63.032605 -139.399857 77.607595 -152.798456 89.577172 -155.152215 C 105.105875 -158.20586 121.250532 -160.562088 136.869427 -163.114632 C 160.25447 -166.936372 185.726119 -182.999946 207.788047 -174.354875 C 222.40959 -168.625354 238.182002 -152.630702 237.215495 -136.956431 C 234.907633 -99.528828 177.396606 -88.106755 156.508582 -56.964466 C 150.208702 -47.571874 137.720189 -35.056107 143.422696 -25.289291 C 177.976314 33.891501 350.320145 -68.525285 349.542829 -0.000001 C 348.702962 74.039586 179.122639 -29.595268 126.273468 22.265419 Z " fill="url(#two-361)" stroke="undefined" stroke-width="1" stroke-opacity="1" fill-opacity="1" visibility="visible" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"></path></g></svg>
          <LottieHero />
        </div>
      </div>
    </>
  );
};

export default Home;